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
  return (
    <footer id="footer" className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Logo size="md" />
          <p className={`body-sm ${styles.tagline}`}>
            Transparency-led background verification and screening services. Making hiring safer, faster, and more compliant.
          </p>
          <div className={styles.contact}>
            <a href="mailto:info@ozclu.com" className={`body-sm ${styles.email}`}>
              info@ozclu.com
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
            © {new Date().getFullYear()} OZCLU Verification Services. All rights reserved.
          </p>
          <p className={`body-sm ${styles.legalNote}`}>
            OzClu is committed to transparent governance and responsible data practices.
          </p>
        </div>
      </div>
    </footer>
  );
}
