"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import GridLines from "@/components/GridLines";
import RashiWheel from "@/components/RashiWheel";
import styles from "./about-page.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const pageTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <GridLines />
      <Navbar />
      
      <div className={styles.heroWheelWrapper}>
        <RashiWheel />
      </div>

      <Link href="/" className={styles.backBtn}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </Link>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <motion.h1 
              className={styles.heroTitle}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={pageTransition}
            >
              Our <span className={styles.italic}>Journey</span>
            </motion.h1>
            <motion.p 
              className={styles.heroLead}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ ...pageTransition, delay: 0.2 }}
            >
              A decade and a half of harmonizing the cosmic dance between architecture and ancient Vedic wisdom.
            </motion.p>
          </div>
        </section>

        {/* The Journey Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.journeyGrid}>
              <motion.div 
                className={styles.journeyText}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h3>Foundations in Vidya</h3>
                <p>
                  My path began in the sacred temples of Varanasi, where I spent seven years studying the ancient Shastras under the guidance of traditional masters. This wasn't just academic; it was a deep immersion into the philosophy of spatial energy.
                </p>
                <p>
                  Later, I combined this traditional knowledge with a degree in Architecture from SPA Delhi, creating a unique bridge between technical structural integrity and metaphysical spatial harmony.
                </p>
              </motion.div>
              <div className={styles.journeyImageWrapper}>
                <Image 
                  src="/images/story-1.png" 
                  alt="Studying the ancient texts" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Certifications */}
        <section className={`${styles.section} vastu-grid`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Accreditations</h2>
            <div className={styles.certGrid}>
              {[
                {
                  year: "2010",
                  title: "Master of Vastu Vidya",
                  source: "All India Federation of Astrologers' Societies"
                },
                {
                  year: "2014",
                  title: "Architectural Excellence",
                  source: "Council of Architecture, India"
                },
                {
                  year: "2018",
                  title: "Sustainable Vedic Design",
                  source: "International Vastu Association"
                },
                {
                  year: "2022",
                  title: "Heritage Conservator",
                  source: "National Cultural Foundation"
                }
              ].map((cert, i) => (
                <motion.div 
                  key={i}
                  className={styles.certCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className={styles.certYear}>{cert.year}</span>
                  <h4>{cert.title}</h4>
                  <p>{cert.source}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Moments of Balance</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <Image src="/images/gallery-1.png" alt="Project 1" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/images/gallery-2.png" alt="Project 2" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/images/gallery-3.png" alt="Project 3" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.galleryItem}>
                <Image src="/images/gallery-4.png" alt="Project 4" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.section} style={{ textAlign: 'center' }}>
          <Link href="/#contact" className={styles.backBtn} style={{ position: 'static', display: 'inline-flex', width: 'auto', padding: '1rem 3rem', borderRadius: '50px' }}>
            Start Your Own Story
          </Link>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--background)' }}>
        <p className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Healing<span className="text-accent">.</span></p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.05em' }}>© 2026 Healing Consultancy. All rights reserved.</p>
      </footer>
    </div>
  );
}
