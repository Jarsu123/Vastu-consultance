"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import RashiWheel from "./RashiWheel";

export default function Hero() {
  return (
    <main className={`${styles.hero} vastu-grid`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>The Science of Soul & Space</span>
          </div>

          <h1 className={styles.title}>
            Healing<br />
            <span className={styles.italic}>Consultancy</span>
          </h1>

          <p className={styles.description}>
            Harnessing celestial movements and spatial harmonics to guide your path toward eternal balance and prosperity.
          </p>

          <div className={styles.actions}>
            <Link href="#" className={styles.primaryBtn}>
              Get Started
            </Link>
            <Link href="#" className={styles.secondaryBtn}>
              <span>Explore Vastu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <RashiWheel />

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </main>
  );
}
