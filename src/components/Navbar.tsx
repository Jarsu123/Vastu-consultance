"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.logo} brand-font`}>
        Healing<span className="text-accent">.</span>
      </div>
      <div className={styles.links}>
        <Link href="#" className={styles.link}>Services</Link>
        <Link href="#" className={styles.link}>Vastu</Link>
        <Link href="#" className={styles.link}>Horoscope</Link>
        <Link href="#" className={styles.link}>About</Link>
      </div>
      <button className={styles.cta}>
        Book Reading
      </button>
    </nav>
  );
}
