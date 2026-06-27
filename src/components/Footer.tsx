'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Footer.module.css';

const footerLinks = {
  resources: [
    { label: 'Latest News', href: '/news' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Approach', href: '/services#how-it-works' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/news' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Compliance', href: '/about#compliance' },
    { label: 'FAQ', href: '/faq' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('info@ozclu.com');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tagline, setTagline] = useState('Transparency-led background verification and screening services. Making hiring safer, faster, and more compliant.');
  const [siteName, setSiteName] = useState('OZCLU Verification Services');

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          if (data.contactEmail) setEmail(data.contactEmail);
          if (data.contactPhone) setPhone(data.contactPhone);
          if (data.address) setAddress(data.address);
          if (data.tagline) setTagline(data.tagline);
          if (data.siteName) setSiteName(data.siteName);
        }
      } catch (err) {
        console.error('Failed to load settings in footer:', err);
      }
    }
    fetchSettings();
  }, []);

  return (
    <footer id="footer" className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Logo size="md" />
          <p className={`body-sm ${styles.tagline}`}>
            {tagline}
          </p>
          <div className={styles.contact} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <a href={`mailto:${email}`} className={`body-sm ${styles.email}`}>
              {email}
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className={styles.linkCol}>
          <h4 className={`label-md ${styles.colTitle}`}>Resources</h4>
          <ul className={styles.linkList}>
            {footerLinks.resources.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link href={link.href} className={`body-sm ${styles.link}`}>{link.label}</Link>
                ) : (
                  <a href={link.href} className={`body-sm ${styles.link}`}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4 className={`label-md ${styles.colTitle}`}>Legal</h4>
          <ul className={styles.linkList}>
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link href={link.href} className={`body-sm ${styles.link}`}>{link.label}</Link>
                ) : (
                  <a href={link.href} className={`body-sm ${styles.link}`}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={`body-sm ${styles.copyright}`}>
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <p className={`body-sm ${styles.legalNote}`}>
            OzClu is committed to transparent governance and responsible data practices.
          </p>
        </div>
      </div>
    </footer>
  );
}
