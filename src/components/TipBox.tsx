"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TipBox.module.css";

const TIPS = [
  "Keep the North-East corner clean for good energy.",
  "Put a small water fountain in the North for better jobs and money.",
  "Don't put a mirror in front of your bed for better sleep.",
  "Try to have your kitchen in the South-East corner.",
  "Keep the center of your house empty and clean."
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
