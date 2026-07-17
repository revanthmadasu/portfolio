import { Home, Sparkles, Briefcase, FolderGit2, type LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/home', icon: Home },
  { label: 'Skills', path: '/skills', icon: Sparkles },
  { label: 'Experience', path: '/experience', icon: Briefcase },
  { label: 'Projects', path: '/projects', icon: FolderGit2 },
];
