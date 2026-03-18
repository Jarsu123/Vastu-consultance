"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TipBox.module.css";

const TIPS = [
  "A clean and open center invites positive energy and harmony into your home.",
  "Place a small water fountain in the North to attract wealth and career growth.",
  "Avoid placing mirrors directly in front of your bed for a restful sleep.",
  "Position your kitchen in the South-East corner to balance the fire element.",
  "Keep your main entrance bright and well-lit to welcome divine blessings."
];

export default function TipBox() {
  const [currentTip, setCurrentTip] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const ROTATION_TIME = 4000; // 4 seconds
  const STEP_TIME = 40; // update progress every 40ms for smoothness

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const startTime = Date.now() - (progress / 100) * ROTATION_TIME;
    
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / ROTATION_TIME) * 100;

      if (newProgress >= 100) {
        setCurrentTip((prev) => (prev + 1) % TIPS.length);
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    }, STEP_TIME);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentTip]);

  return (
    <div 
      className={styles.floatWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.tipCard}>
        <div className={styles.cardHeader}>
          <span className={styles.sparkle}>💡</span>
          <span>VASTU PRO TIP</span>
        </div>
        
        <div className={styles.contentArea}>
          {TIPS.map((tip, index) => (
            <div 
              key={index} 
              className={`${styles.tipText} ${index === currentTip ? styles.active : ""}`}
            >
              {tip.split('.').map((part, i) => (
                part.trim() && <p key={i}>{part.trim()}.</p>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.indicators}>
            {TIPS.map((_, index) => (
              <div 
                key={index} 
                className={`${styles.dot} ${index === currentTip ? styles.dotActive : ""}`}
                onClick={() => {
                  setCurrentTip(index);
                  setProgress(0);
                }}
              />
            ))}
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ 
                width: `${progress}%`,
                transition: isPaused ? "none" : "width 40ms linear" 
              }} 
            />
          </div>
        </div>

        <button 
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className={styles.arrow}>↑</span>
          Back to Top
        </button>
      </div>
      <div className={styles.shadow} />
    </div>
  );
}
