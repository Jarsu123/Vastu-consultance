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
              <div className={styles.omSymbol}>ॐ</div>
              <div className={styles.hindiText}>वास्तु देवाय: नम:</div>
            </div>
            
            <div className={styles.quoteWrapper}>
              <span className={styles.quoteMark}>“</span>
              <blockquote className={styles.quote}>
                True harmony begins when your space, energy, and intentions align.
              </blockquote>
            </div>

            <div className={styles.ctaSubtext}>START YOUR CONSULTATION TODAY</div>
            
            <Link href="#contact" className={styles.consultBtn}>
              CONSULT NOW
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
