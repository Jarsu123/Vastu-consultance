"use client";

import { useState } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.logo} brand-font`} onClick={() => setIsOpen(false)}>
          Healing<span className="text-accent">.</span>
        </Link>
        
        <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#services" className={styles.link} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#testimonials" className={styles.link} onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link href="/#book" className={styles.link} onClick={() => setIsOpen(false)}>The Book</Link>
        </div>
        
        <div className={styles.rightSection}>
          <button className={styles.cta} onClick={() => setIsBookingOpen(true)}>
            Book Reading
          </button>
          
          <button 
            className={styles.menuToggle} 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}
