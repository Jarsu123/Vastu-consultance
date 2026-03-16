import Image from "next/image";
import Link from "next/link";
import { SolarSpirit } from "./CelestialDecor";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <SolarSpirit />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/about-expert.jpg" 
                alt="Vastu Expert" 
                fill
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.years}>15+</span>
                <span className={styles.expText}>Years of Experience</span>
              </div>
            </div>
            <div className={styles.imageBg}></div>
          </div>

          <div className={styles.contentSide}>
            <div className={styles.badge}>
              <div className={styles.line}></div>
              <span className={styles.badgeText}>Our Experience</span>
            </div>
            <h2 className={styles.title}>
              Ancient Vastu Skills for Modern Homes
            </h2>
            <p className={styles.description}>
              We believe that your home affects your life. For 15 years, we have helped people make their homes better using Vastu.
            </p>
            <p className={styles.description}>
              Our way is simple—we help you fix the energy of your space to support your goals and bring peace.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Success Stories</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12</span>
                <span className={styles.statLabel}>Awards Won</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </div>

            <Link href="/about" className={styles.cta}>Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
