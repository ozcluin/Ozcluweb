'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HomeContent from './pages/HomeContent';
import AboutContent from './pages/AboutContent';
import ServicesContent from './pages/ServicesContent';
import NewsContent from './pages/NewsContent';
import ContactContent from './pages/ContactContent';
import PrivacyContent from './pages/PrivacyContent';
import TermsContent from './pages/TermsContent';
import FaqContent from './pages/FaqContent';

interface ClientPageManagerProps {
  children: React.ReactNode;
}

export default function ClientPageManager({ children }: ClientPageManagerProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to top or specific hash anchor on pathname/hash changes
  useEffect(() => {
    if (!mounted) return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Add a tiny delay to ensure the display change to block has completed and layout is settled
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
          return true;
        }
      }
      return false;
    };

    // Run on mount or pathname change
    const scrolledToHash = handleHashScroll();
    if (!scrolledToHash) {
      window.scrollTo(0, 0);
    }

    // Listen to hashchange events (same page hash link clicks)
    window.addEventListener('hashchange', handleHashScroll);
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, [pathname, mounted]);

  // During Server-Side Rendering (SSR) and initial hydration, render children directly 
  // to ensure server HTML matches the client's initial HTML (avoid hydration mismatch).
  if (!mounted) {
    return <>{children}</>;
  }

  const knownPaths = ['/', '/about', '/services', '/news', '/contact', '/privacy', '/terms', '/faq'];
  const isKnownPath = knownPaths.includes(pathname);

  // Fallback to standard children if it is an unknown path
  if (!isKnownPath) {
    return <>{children}</>;
  }

  // Client-side execution: Render all known page contents in the DOM and toggle them instantly.
  // This yields instant page switching with zero layout shifts, zero chunk load delays, and preserves state.
  return (
    <>
      <div style={{ display: pathname === '/' ? 'block' : 'none' }}>
        <HomeContent />
      </div>
      <div style={{ display: pathname === '/about' ? 'block' : 'none' }}>
        <AboutContent />
      </div>
      <div style={{ display: pathname === '/services' ? 'block' : 'none' }}>
        <ServicesContent />
      </div>
      <div style={{ display: pathname === '/news' ? 'block' : 'none' }}>
        <NewsContent />
      </div>
      <div style={{ display: pathname === '/contact' ? 'block' : 'none' }}>
        <ContactContent />
      </div>
      <div style={{ display: pathname === '/privacy' ? 'block' : 'none' }}>
        <PrivacyContent />
      </div>
      <div style={{ display: pathname === '/terms' ? 'block' : 'none' }}>
        <TermsContent />
      </div>
      <div style={{ display: pathname === '/faq' ? 'block' : 'none' }}>
        <FaqContent />
      </div>
    </>
  );
}
