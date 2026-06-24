'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HomeContent from './pages/HomeContent';
import AboutContent from './pages/AboutContent';
import ServicesContent from './pages/ServicesContent';
import NewsContent from './pages/NewsContent';
import ContactContent from './pages/ContactContent';

interface ClientPageManagerProps {
  children: React.ReactNode;
}

export default function ClientPageManager({ children }: ClientPageManagerProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to top on pathname changes
  useEffect(() => {
    if (mounted) {
      window.scrollTo(0, 0);
    }
  }, [pathname, mounted]);

  // During Server-Side Rendering (SSR) and initial hydration, render children directly 
  // to ensure server HTML matches the client's initial HTML (avoid hydration mismatch).
  if (!mounted) {
    return <>{children}</>;
  }

  const knownPaths = ['/', '/about', '/services', '/news', '/contact'];
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
    </>
  );
}
