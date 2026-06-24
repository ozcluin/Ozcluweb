import Link from 'next/link';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeMap = {
    sm: { height: 28, fontSize: '1.25rem' },
    md: { height: 38, fontSize: '1.625rem' },
    lg: { height: 54, fontSize: '2.25rem' },
  };

  const s = sizeMap[size];

  return (
    <Link href="/" className={`${styles.logo} ${styles[size]} ${className}`} aria-label="OzClu Home">
      <svg
        viewBox="0 0 200 40"
        height={s.height}
        className={styles.logoSvg}
        aria-hidden="true"
        role="img"
      >
        <defs>
          {/* Premium radial gradient for glass lens reflection and depth */}
          <radialGradient id="glass-lens-grad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="90%" stopColor="#C6982E" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#C6982E" stopOpacity="0.08" />
          </radialGradient>
        </defs>

        {/* OZ — Magnifying Glass where Z is the handle (golden) */}
        <g className={styles.goldenO}>
          {/* Glass lens fill */}
          <circle cx="18" cy="14" r="10" fill="url(#glass-lens-grad)" />
          {/* Glass frame (O) — centered at y=14 so it sits slightly above baseline */}
          <circle cx="18" cy="14" r="10" fill="none" stroke="#C6982E" strokeWidth="3.2" />
          {/* Lens glint / glare — perfectly curved along the inner top-left edge */}
          <path
            d="M 9.7 12.5 A 8.4 8.4 0 0 1 16.5 5.7"
            fill="none"
            stroke="#FFF4CC"
            strokeWidth="1.6"
            strokeLinecap="round"
            className={styles.glassGlint}
          />
          {/* Secondary soft reflection at bottom-right */}
          <path
            d="M 23.5 19.5 A 8.4 8.4 0 0 1 19.5 21.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.35"
          />
          {/* Z-shaped handle — perpendicular, on baseline */}
          <path d="M26 21 L38 21 L26 33 L38 33" fill="none" stroke="#C6982E" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* C — Eye shape cut in half to represent the letter C (Enlarged and rounder) */}
        <g className={styles.eyeC} transform="translate(48, 5)">
          {/* Upper lid — morphs on hover */}
          <path
            className={styles.upperLid}
            d="M0 15 Q8 1.5, 18 3.5"
            fill="none"
            stroke="#181d16"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Lower lid — morphs on hover */}
          <path
            className={styles.lowerLid}
            d="M0 15 Q8 28.5, 18 26.5"
            fill="none"
            stroke="#181d16"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Iris (full circle, enlarged) */}
          <circle cx="14" cy="15" r="7.5" fill="#016e1c" />
          {/* Pupil (full circle, enlarged) */}
          <circle cx="14" cy="15" r="3.4" fill="#181d16" />
          {/* Iris glint */}
          <circle cx="11" cy="12.2" r="1.8" fill="white" opacity="0.85" />
        </g>

        {/* l */}
        <text
          x="82"
          y="30"
          className={styles.letterL}
          fontFamily="var(--font-serif)"
          fontSize="28"
          fontWeight="700"
          fill="#181d16"
        >
          l
        </text>

        {/* u */}
        <text
          x="92"
          y="30"
          className={styles.letterU}
          fontFamily="var(--font-serif)"
          fontSize="28"
          fontWeight="700"
          fill="#181d16"
        >
          u
        </text>

        {/* Hidden e — very subtle, ghosted */}
        <text
          x="112"
          y="30"
          className={styles.hiddenE}
          fontFamily="var(--font-serif)"
          fontSize="28"
          fontWeight="700"
          fill="#181d16"
        >
          e
        </text>
      </svg>
    </Link>
  );
}
