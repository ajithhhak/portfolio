"use client";
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="top-nav">
      <div className="page-container nav-content">
        {/* Left: Role Badges */}
        <Link href="/" className="nav-role-badge" style={{ textDecoration: 'none' }}>
          <span className="nav-role-title">Electronics Engineer</span>
          <span className="nav-role-sub">Robotics, IoT &amp; Embedded Systems</span>
        </Link>

        {/* Center: Jump Links */}
        <ul className="nav-menu">
          <li>
            <a href="#projects" className="nav-link">Selected Projects</a>
          </li>
          <li>
            <a href="#education-skills" className="nav-link">Education &amp; Skills</a>
          </li>
          <li>
            <a href="#work-process" className="nav-link">Work Process</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <a
            href="/resume.pdf"
            download="Ajith_Kumar_Choudoju_Resume.pdf"
            className="nav-resume-btn"
            title="Download Ajith's Resume PDF"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Resume</span>
          </a>

          <a href="#contact" className="nav-status-pill">
            <span className="status-beacon"></span>
            <span>Available for Projects</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
