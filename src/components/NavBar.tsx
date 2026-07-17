import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems } from '../data/nav';
import { profile } from '../data/profile';

export function NavBar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex w-full max-w-4xl items-center justify-between gap-2 rounded-full px-3 py-2 sm:px-4">
        {/* Brand */}
        <NavLink
          to="/home"
          className="ml-1 hidden font-display text-sm font-bold tracking-tight sm:block"
        >
          <span className="text-gradient">RM</span>
        </NavLink>

        {/* Nav links */}
        <ul className="flex items-center gap-1">
          {navItems.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink to={path} className="block">
                {({ isActive }) => (
                  <span className="relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4">
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'var(--accent-soft)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon
                      size={16}
                      className={`relative z-10 ${isActive ? 'text-accent' : 'text-muted'}`}
                    />
                    <span
                      className={`relative z-10 hidden sm:inline ${
                        isActive ? 'text-accent' : 'text-muted'
                      }`}
                    >
                      {label}
                    </span>
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: external links + theme */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-0.5 sm:flex">
            <IconLink href={profile.links.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </IconLink>
            <IconLink href={profile.links.github} label="GitHub">
              <Github size={16} />
            </IconLink>
            <IconLink href={`mailto:${profile.links.email}`} label="Email">
              <Mail size={16} />
            </IconLink>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
