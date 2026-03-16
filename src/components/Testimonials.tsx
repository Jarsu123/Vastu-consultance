"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoonPhases } from "./CelestialDecor";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Jigna P.",
    content: "She was too good thank you mam. Apne achha marghdarshan diya hai, positive banaya mujhe. Ek nayi hope aayi hai mere mein. Thank you!",
    stars: 5,
    scramble: { x: -120, y: -40, rotate: -12, scale: 0.95 },
  },
  {
    name: "Dheeraj S.",
    content: "Nice explanation. Clear and precise guidance that helped me a lot.",
    stars: 5,
    scramble: { x: 140, y: -80, rotate: 10, scale: 1.02 },
  },
  {
    name: "Kalaivani S.",
    content: "Accurate predictions. The level of detail and foresight was truly impressive.",
    stars: 5,
    scramble: { x: -160, y: 120, rotate: -15, scale: 0.98 },
  },
  {
    name: "Akshay W.",
    content: "Good 👍. Very professional and insightful consultation.",
    stars: 5,
    scramble: { x: 180, y: 60, rotate: 8, scale: 1.05 },
  },
  {
    name: "Madhuri K.",
    content: "Ji ma'am karti hu main aur kuch remedy. Deeply appreciate the follow-up and care.",
    stars: 5,
    scramble: { x: 20, y: -160, rotate: -8, scale: 1.03 },
  },
  {
    name: "Elena Richardson",
    content: "The insights provided by Healing Consultancy transformed my perspective on space. Our latest project has a flow that feels intentional and divine.",
    stars: 5,
    scramble: { x: -40, y: 180, rotate: 15, scale: 0.97 },
  },
];

export default function Testimonials() {
  const [isAligned, setIsAligned] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <MoonPhases />
          <div className={styles.badge} style={{ marginTop: '2rem' }}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>Client Voices</span>
          </div>
          <h2 className={styles.title}>
            Whispers of <span className={styles.italic}>Transformation</span>
          </h2>
          <p className={styles.subtitle}>
            Click anywhere below to align the cosmic energy
          </p>
        </div>

        <div 
          className={styles.testimonialsWrapper}
          onClick={() => setIsAligned(!isAligned)}
        >
          <div className={isAligned ? styles.grid : styles.scrambleContainer}>
            {testimonials.map((t, i) => {
              const mobileScramble = {
                x: t.scramble.x * 0.4,
                y: t.scramble.y * 0.4,
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
                <p className={styles.content}>"{t.content}"</p>
                <div className={styles.author}>
                  <div className={styles.authorCircle}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.name}>{t.name}</h4>
                    <span className={styles.verified}>Verified Experience</span>
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
