import type { Emitter, Intensity, ParticleKind } from './types';

interface P {
  kind: ParticleKind;
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  size: number;
  rot: number;
  vrot: number;
  phase: number;
  freq: number;
  amp: number;
  alpha: number;
  color: string;
  wind: number;
}

// base counts per ~1280x720 viewport, before density/intensity scaling
const BASE: Record<ParticleKind, number> = {
  rain: 240,
  leaf: 26,
  mist: 7,
  firefly: 26,
  snow: 160,
  petal: 34,
};

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const pick = (arr: string[] | undefined, fallback: string) =>
  arr && arr.length ? arr[(Math.random() * arr.length) | 0] : fallback;

export class ParticleEngine {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private w = 0;
  private h = 0;
  private particles: P[] = [];
  private emitters: Emitter[] = [];
  private intensity: Intensity = 'full';
  private raf = 0;
  private running = false;
  private last = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) throw new Error('2d context unavailable');
    this.ctx = ctx;
  }

  resize(w: number, h: number, dpr: number) {
    this.w = w;
    this.h = h;
    this.canvas.width = Math.max(1, Math.floor(w * dpr));
    this.canvas.height = Math.max(1, Math.floor(h * dpr));
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.rebuild();
  }

  setEmitters(emitters: Emitter[], intensity: Intensity) {
    this.emitters = emitters;
    this.intensity = intensity;
    this.rebuild();
  }

  private countFor(e: Emitter): number {
    if (!this.w || !this.h) return 0;
    const areaFactor = (this.w * this.h) / (1280 * 720);
    const intensityFactor = this.intensity === 'calm' ? 0.32 : 1;
    return Math.min(700, Math.round(BASE[e.kind] * e.density * areaFactor * intensityFactor));
  }

  private rebuild() {
    if (!this.w || !this.h) return;
    this.particles = [];
    for (const e of this.emitters) {
      const n = this.countFor(e);
      for (let i = 0; i < n; i++) this.particles.push(this.spawn(e, true));
    }
  }

  private spawn(e: Emitter, initial: boolean): P {
    const wind = e.wind ?? 0;
    const base: P = {
      kind: e.kind,
      x: rand(0, this.w),
      y: initial ? rand(0, this.h) : -20,
      vx: 0,
      vy: 0,
      len: 0,
      size: 1,
      rot: rand(0, Math.PI * 2),
      vrot: 0,
      phase: rand(0, Math.PI * 2),
      freq: rand(0.5, 1.5),
      amp: 0,
      alpha: 1,
      color: '#fff',
      wind,
    };
    switch (e.kind) {
      case 'rain': {
        base.vy = rand(760, 1180);
        base.vx = wind * base.vy;
        base.len = rand(12, 26);
        base.alpha = rand(0.18, 0.5);
        base.y = initial ? rand(0, this.h) : rand(-this.h * 0.3, 0);
        break;
      }
      case 'snow': {
        base.vy = rand(28, 70);
        base.size = rand(1.4, 3.6);
        base.amp = rand(12, 40);
        base.alpha = rand(0.5, 0.95);
        base.y = initial ? rand(0, this.h) : -10;
        break;
      }
      case 'leaf':
      case 'petal': {
        base.vy = rand(34, 78);
        base.vrot = rand(-1.4, 1.4);
        base.size = rand(7, 14);
        base.amp = rand(30, 90);
        base.freq = rand(0.4, 1.1);
        base.alpha = rand(0.75, 1);
        base.color = pick(e.palette, '#b5651d');
        base.y = initial ? rand(0, this.h) : rand(-40, -10);
        break;
      }
      case 'mist': {
        base.size = rand(160, 340);
        base.vx = rand(6, 20) * (Math.random() < 0.5 ? -1 : 1);
        base.y = rand(this.h * 0.35, this.h * 0.95);
        base.alpha = rand(0.05, 0.14);
        break;
      }
      case 'firefly': {
        base.size = rand(1.4, 2.8);
        base.vx = rand(-14, 14);
        base.vy = rand(-10, 10);
        base.freq = rand(0.6, 1.8);
        base.color = pick(e.palette, '#d6f56b');
        base.y = rand(this.h * 0.3, this.h);
        break;
      }
    }
    return base;
  }

  private step(dt: number) {
    const { w, h } = this;
    for (const p of this.particles) {
      switch (p.kind) {
        case 'rain':
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.y > h + 20) Object.assign(p, this.spawn({ kind: 'rain', density: 0, wind: p.wind }, false));
          if (p.x > w + 20) p.x = -20;
          else if (p.x < -20) p.x = w + 20;
          break;
        case 'snow':
          p.phase += p.freq * dt;
          p.y += p.vy * dt;
          p.x += Math.cos(p.phase) * p.amp * dt;
          if (p.y > h + 10) Object.assign(p, this.spawn({ kind: 'snow', density: 0 }, false));
          break;
        case 'leaf':
        case 'petal':
          p.phase += p.freq * dt;
          p.y += p.vy * dt;
          p.x += (Math.cos(p.phase) * p.amp + p.wind * 60) * dt;
          p.rot += p.vrot * dt;
          if (p.y > h + 30) Object.assign(p, this.spawn({ kind: p.kind, density: 0, palette: [p.color], wind: p.wind }, false));
          if (p.x > w + 40) p.x = -40;
          else if (p.x < -40) p.x = w + 40;
          break;
        case 'mist':
          p.x += p.vx * dt;
          if (p.x - p.size > w) p.x = -p.size;
          else if (p.x + p.size < 0) p.x = w + p.size;
          break;
        case 'firefly':
          p.phase += p.freq * dt;
          p.x += p.vx * dt + Math.cos(p.phase * 1.3) * 6 * dt;
          p.y += p.vy * dt + Math.sin(p.phase) * 6 * dt;
          if (Math.random() < 0.01) {
            p.vx = rand(-14, 14);
            p.vy = rand(-10, 10);
          }
          if (p.x < 0) p.x = w;
          else if (p.x > w) p.x = 0;
          if (p.y < h * 0.25) p.y = h * 0.25;
          else if (p.y > h) p.y = h;
          break;
      }
    }
  }

  private draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);

    // rain — batch into one stroke
    ctx.lineCap = 'round';
    for (const p of this.particles) {
      if (p.kind !== 'rain') continue;
      ctx.strokeStyle = `rgba(200, 225, 235, ${p.alpha})`;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.wind * p.len, p.y + p.len);
      ctx.stroke();
    }

    for (const p of this.particles) {
      if (p.kind === 'rain') continue;
      if (p.kind === 'mist') {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        g.addColorStop(0, `rgba(220, 235, 228, ${p.alpha})`);
        g.addColorStop(1, 'rgba(220, 235, 228, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.kind === 'snow') {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.kind === 'firefly') {
        const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(p.phase * 2));
        ctx.save();
        ctx.globalAlpha = pulse;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else {
        // leaf / petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        const s = p.size;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(s * 0.7, -s * 0.2, 0, s);
        ctx.quadraticCurveTo(-s * 0.7, -s * 0.2, 0, -s);
        ctx.fill();
        ctx.restore();
      }
    }
    ctx.globalAlpha = 1;
  }

  private loop = (t: number) => {
    if (!this.running) return;
    const dt = Math.min(0.05, (t - this.last) / 1000 || 0.016);
    this.last = t;
    this.step(dt);
    this.draw();
    this.raf = requestAnimationFrame(this.loop);
  };

  start() {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  /** render a single static frame (reduced-motion) */
  renderStatic() {
    this.step(0);
    this.draw();
  }

  destroy() {
    this.stop();
    this.particles = [];
  }
}
