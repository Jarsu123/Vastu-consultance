import Image from "next/image";
import { SriYantra } from "./CelestialDecor";
import styles from "./Services.module.css";

const services = [
  {
    title: "Vastu Architecture",
    description: "Designing contemporary spaces aligned with ancient Vedic principles for harmony and growth.",
    image: "/images/service-vastu.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    title: "Astro-Mapping",
    description: "Personalized spatial analysis based on your celestial birth chart for path correction.",
    image: "/images/service-astro.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="12" y1="2" x2="12" y2="22"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    title: "Energy Balancing",
    description: "Cleansing environmental toxins and restoring the natural flow of Prana in your surroundings.",
    image: "/images/service-energy.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    title: "Corporate Vastu",
    description: "Optimizing workplaces to enhance productivity, leadership, and financial abundance.",
    image: "/images/service-corporate.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
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
