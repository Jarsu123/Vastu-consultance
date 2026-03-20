"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${isOpen ? styles.openNav : ""}`}>
        <Link href="/" className={`${styles.logo} brand-font`} onClick={() => setIsOpen(false)}>
          Healing<span className="text-accent">.</span>
        </Link>
        
        <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          <button 
            className={styles.mobileClose} 
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          
          <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#services" className={styles.link} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#testimonials" className={styles.link} onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link href="/#book" className={styles.link} onClick={() => setIsOpen(false)}>The Book</Link>
        </div>
        
        <div className={styles.rightSection}>
          {!isOpen ? (
            <>
              <button className={styles.cta} onClick={() => setIsBookingOpen(true)}>
                Book Reading
              </button>
              
              <button 
                className={styles.menuToggle} 
                onClick={() => setIsOpen(true)} 
                aria-label="Toggle Menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </>
          ) : null}
        </div>
      </nav>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}
