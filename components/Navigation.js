"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  // Don't show navigation on the entry 'Run' page
  if (pathname === '/') return null;

  return (
    <nav>
      <Link href="/home" className="nav-logo">
        <span>Ajith Kumar</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/skills" className={pathname === '/skills' ? 'active' : ''}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link href="/resume" className={pathname === '/resume' ? 'active' : ''}>
            RESUME
          </Link>
        </li>
        <li>
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
