// Eagerly import every skill icon SVG as a URL, keyed by filename (no ext).
const modules = import.meta.glob('../assets/img/skill-icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const iconMap: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const name = path.split('/').pop()!.replace('.svg', '');
  iconMap[name.toLowerCase()] = url;
}

/** Resolve a skill's icon URL by its iconKey (matching a file in skill-icons/). */
export function getSkillIcon(iconKey: string): string | undefined {
  return iconMap[iconKey.toLowerCase()];
}
