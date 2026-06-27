'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'News', href: '/news' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        <Logo size="md" />

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className={`btn btn-primary btn-sm ${styles.ctaDesktop}`}>
          Get Verified
        </Link>

        <button
          id="mobile-menu-toggle"
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.open : ''}`} />
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.open : ''}`} />
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        role="menu"
      >
        <div className={styles.mobileMenuInner}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ''}`}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`btn btn-primary ${styles.mobileCta}`}
          >
            Get Verified
          </Link>
        </div>
      </div>
    </nav>
  );
}
