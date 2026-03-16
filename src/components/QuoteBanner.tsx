import Image from "next/image";
import Link from "next/link";
import { SriYantra } from "./CelestialDecor";
import styles from "./QuoteBanner.module.css";

export default function QuoteBanner() {
  return (
    <section className={styles.banner}>
      {/* Celestial Particles */}
      <div className={styles.celestialBg}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2
          }}></div>
        ))}
      </div>

      <div className="container">
        <div className={styles.glassContent}>
          {/* Sacred Geometry Background */}
          <div className={styles.mandalaWrapper}>
            <SriYantra />
          </div>

          <div className={styles.textSide}>
            <div className={styles.logoWrapper}>
              <svg width="60" height="60" viewBox="0 0 100 100" className={styles.lotusLogo}>
                <path d="M50 20 C60 40 90 50 50 80 C10 50 40 40 50 20" fill="var(--accent-orange)" opacity="0.8" />
                <path d="M50 30 C70 45 80 70 50 85 C20 70 30 45 50 30" fill="var(--accent-orange)" opacity="0.6" />
                <circle cx="50" cy="85" r="3" fill="var(--accent-orange)" />
              </svg>
              <div className={styles.hindiText}>वास्तु देवाय: नम:</div>
            </div>
            
            <div className={styles.quoteWrapper}>
              <span className={styles.quoteMark}>“</span>
              <blockquote className={styles.quote}>
                Our homes should inspire us to go out into the world and do great things and then welcome us back for refreshment
              </blockquote>
            </div>
            
            <Link href="#contact" className={styles.consultBtn}>
              CONSULT NOW !!
            </Link>
          </div>
          
          <div className={styles.imageSide}>
            <div className={styles.portraitWrapper}>
              <Image 
                src="/images/about-expert.jpg" 
                alt="Vastu Expert" 
                fill
                style={{ objectFit: 'cover' }}
                className={styles.portrait}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
    </section>
  );
}
