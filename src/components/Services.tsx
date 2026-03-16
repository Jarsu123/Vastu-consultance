import Image from "next/image";
import { SriYantra } from "./CelestialDecor";
import styles from "./Services.module.css";

const services = [
  {
    title: "Vedic Numerology",
    description: "Aligning your life path with the power of sacred numbers and cosmic vibrations.",
    image: "/images/service-numerology.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 10"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    title: "Name Correction",
    description: "Harmonizing your identity's frequency to attract success and eliminate obstacles.",
    image: "/images/service-name.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
  },
  {
    title: "Watch Analysis",
    description: "Decoding the energy of your timepiece to synchronize with auspicious moments.",
    image: "/images/service-watch.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7"></circle>
        <polyline points="12 9 12 12 14.5 13.5"></polyline>
        <path d="M16 2h-8M16 22h-8M4.5 7h15M4.5 17h15"></path>
      </svg>
    ),
  },
  {
    title: "Business Numerology",
    description: "Selecting powerful brand names and dates to ensure commercial prosperity.",
    image: "/images/service-business.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Vaastu Correction",
    description: "Realigning environmental energies without structural demolition for total harmony.",
    image: "/images/service-correction.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    title: "Astrology",
    description: "Gaining profound insights from celestial alignments to navigate your destiny.",
    image: "/images/service-astrology.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        <path d="M2 12h20M12 2v20"></path>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <SriYantra />
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>Our Expertise</span>
          </div>
          <h2 className={styles.title}>
            Sacred <span className={styles.italic}>Services</span>
          </h2>
          <p className={styles.subtitle}>
            Blending ancient wisdom with modern living to create spaces that breathe and thrive.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageOverlay}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className={styles.cardImage}
                />
                <div className={styles.gradient}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
              <div className={styles.hoverLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
