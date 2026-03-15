import { MoonPhases } from "./CelestialDecor";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Elena Richardson",
    role: "Architectural Designer",
    content: "The insights provided by Healing Consultancy transformed my perspective on space. Our latest project has a flow that feels both intentional and divine.",
    stars: 5,
  },
  {
    name: "Marcus Vane",
    role: "CEO, Vane Enterprises",
    content: "Since we realigned our corporate headquarters with their Vastu mapping, there's been a palpable shift in office morale and creative output.",
    stars: 5,
  },
  {
    name: "Sriya Sharma",
    role: "Homeowner",
    content: "A truly enlightening experience. Every corner of my home now feels balanced and filled with positive energy. Highly recommend their energy balancing.",
    stars: 5,
  },
];

export default function Testimonials() {
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
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(t.stars)].map((_, index) => (
                  <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-orange)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className={styles.content}>"{t.content}"</p>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.name}>{t.name}</h4>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
