"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TipBox.module.css";

const TIPS = [
  "The North-East (Ishanya) should always be clutter-free to allow positive energy flow.",
  "Place a small water fountain in the North to enhance career opportunities and wealth.",
  "Avoid placing a mirror directly opposite the bed to ensure restful sleep and harmony.",
  "The kitchen should ideally be in the South-East to balance the fire element in your home.",
  "Keep the center area (Brahmasthan) open and light to maintain overall spatial health."
];

export default function TipBox() {
  const [currentTip, setCurrentTip] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % TIPS.length);
      }, 2500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <div 
      className={styles.floatWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.tipCard}>
        <div className={styles.cardHeader}>
          <span className={styles.sparkle}>✦</span>
          <span>PRO TIP</span>
        </div>
        
        <div className={styles.contentArea}>
          {TIPS.map((tip, index) => (
            <div 
              key={index} 
              className={`${styles.tipText} ${index === currentTip ? styles.active : ""}`}
            >
              {tip}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.indicators}>
            {TIPS.map((_, index) => (
              <div 
                key={index} 
                className={`${styles.dot} ${index === currentTip ? styles.dotActive : ""}`}
                onClick={() => setCurrentTip(index)}
              />
            ))}
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ 
                width: `${((currentTip + 1) / TIPS.length) * 100}%`,
                transition: isPaused ? "none" : "width 0.5s ease" 
              }} 
            />
          </div>
        </div>
      </div>
      <div className={styles.shadow} />
    </div>
  );
}
