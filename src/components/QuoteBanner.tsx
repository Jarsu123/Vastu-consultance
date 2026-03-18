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
                A peaceful home filled with positive energy creates happiness, success, and harmony in your life.
              </blockquote>
              <div className={styles.trustLine}>
                Guided by Shalu Singh, with 15+ years of Vastu expertise
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <div className={styles.ctaSubtext}>BOOK YOUR MEETING TODAY</div>
              <Link href="#contact" className={styles.consultBtn}>
                Book a Consultation
              </Link>
              <div className={styles.socialProof}>
                <span className={styles.dot}></span>
                Trusted by 500+ families
              </div>
            </div>
          </div>
          
          <div className={styles.imageSide}>
            <div className={styles.portraitContainer}>
              <div className={styles.portraitWrapper}>
                <Image 
                  src="/images/about-expert.jpg" 
                  alt="Vastu Expert - Shalu Singh" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.portrait}
                />
              </div>
              <div className={styles.expertBrief}>
                <h4 className={styles.expertNameInline}>Shalu Singh</h4>
                <p className={styles.expertTitleInline}>Vastu Consultant & Energy Expert</p>
              </div>
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
