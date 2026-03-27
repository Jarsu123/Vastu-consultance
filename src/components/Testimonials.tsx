"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MoonPhases } from "./CelestialDecor";
import styles from "./Testimonials.module.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Namratha D.",
    content: "Very positive, very good guidance. Worth it! Felt a bit relieved after consultation.",
    stars: 5,
    avatar: "/images/testimonials/usha.png",
    scramble: { x: -120, y: -40, rotate: -12, scale: 0.95 },
  },
  {
    name: "Akshay W.",
    content: "Good summary and helpful guidance. Recommended for clear insights.",
    stars: 5,
    avatar: "/images/testimonials/dheeraj.png",
    scramble: { x: 140, y: -80, rotate: 10, scale: 1.02 },
  },
  {
    name: "Madhuri K.",
    content: "Ji ma'am karti hu main aur kuch remedies jo aapne bataye. Positive energy feel ho rahi hai.",
    stars: 5,
    avatar: "/images/testimonials/jigna.png",
    scramble: { x: -160, y: 120, rotate: -15, scale: 0.98 },
  },
  {
    name: "Kalaivani S.",
    content: "Accurate predictions and very helpful space harmonization tips. Thank you!",
    stars: 5,
    avatar: "/images/testimonials/kalaivani.png",
    scramble: { x: 180, y: 60, rotate: 8, scale: 1.05 },
  },
  {
    name: "Divya R.",
    content: "Nice information ma'am. Thank you for the detailed analysis and positive vibes.",
    stars: 5,
    avatar: "/images/testimonials/sakshi.png",
    scramble: { x: 20, y: -160, rotate: -8, scale: 1.03 },
  },
  {
    name: "Menkka V.",
    content: "Thank u mam. Your remedies are very simple yet very effective for my home.",
    stars: 5,
    avatar: "/images/testimonials/jot.png",
    scramble: { x: -40, y: 180, rotate: 15, scale: 0.97 },
  },
  {
    name: "Bjbbikknvf B.",
    content: "Bhut acha h experience! Very professional and deep knowledge of Vastu.",
    stars: 5,
    avatar: "/images/testimonials/raj.png",
    scramble: { x: -200, y: -120, rotate: -10, scale: 0.96 },
  },
  {
    name: "N S.",
    content: "Thank you for the guidance. It has brought clarity to my life path.",
    stars: 4,
    avatar: "/images/testimonials/n-s.png",
    scramble: { x: 220, y: -140, rotate: 12, scale: 1.01 },
  },
];

export default function Testimonials() {
  const [isAligned, setIsAligned] = useState(true); // Default to true to prevent phantom elements during hydration
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <MoonPhases />
          <div className={styles.badge} style={{ marginTop: '2rem' }}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>Client Stories</span>
          </div>
          <h2 className={styles.title}>
            What People <span className={styles.italic}>Say</span>
          </h2>
          <p className={styles.subtitle}>
            Click anywhere below to see what people feel
          </p>
        </div>

        <div 
          className={styles.testimonialsWrapper}
          onClick={() => setIsAligned(!isAligned)}
        >
          <div className={isAligned ? styles.grid : styles.scrambleContainer}>
            {testimonials.map((t, i) => {
              const mobileScramble = {
                x: t.scramble.x * 0.25,
                y: t.scramble.y * 0.25,
                rotate: t.scramble.rotate * 0.5,
                scale: t.scramble.scale
              };
              
              return (
                <motion.div
                  key={i}
                  initial={isMobile ? mobileScramble : t.scramble}
                  animate={isAligned ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 } : (isMobile ? mobileScramble : { ...t.scramble, opacity: 1 })}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 30,
                    mass: 1,
                    delay: isAligned ? i * 0.02 : 0
                  }}
                  className={styles.card}
                >
                <div className={styles.stars}>
                  {[...Array(t.stars)].map((_, index) => (
                    <svg key={index} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-orange)" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                 <p className={styles.content}>&quot;{t.content}&quot;</p>
                <div className={styles.author}>
                  <div className={styles.authorCircle}>
                    <Image 
                      src={t.avatar} 
                      alt={t.name}
                      width={45}
                      height={45}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.name}>{t.name}</h4>
                    <span className={styles.verified}>Real Feedback</span>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
