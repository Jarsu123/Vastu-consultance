import Image from "next/image";
import { AstrologySymbol } from "./CelestialDecor";
import styles from "./BuyBook.module.css";

export default function BuyBook() {
  return (
    <section id="book" className={styles.buyBook}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '40px', zIndex: 5 }}>
          <AstrologySymbol type="lotus" />
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <div className={styles.line}></div>
              <span className={styles.badgeText}>Masterclass in Print</span>
            </div>
            <h2 className={styles.title}>
              The Eternal <span className={styles.italic}>Blueprint</span>
            </h2>
            <p className={styles.description}>
              Unlock the secrets of sacred geometry and spatial harmonics. Our comprehensive guide takes you through the transition of traditional Vastu into modern living spaces.
            </p>
            <ul className={styles.features}>
              <li>300+ Pages of Ancient Wisdom</li>
              <li>Modern Practical Applications</li>
              <li>Hand-drawn Sacred Diagrams</li>
              <li>Energy Mapping Worksheets</li>
            </ul>
            <div className={styles.actions}>
              <button className={styles.primaryBtn}>Order Now — $49</button>
              <span className={styles.deliveryInfo}>*Worldwide shipping available</span>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/vastu-book.png" 
              alt="The Eternal Blueprint Book" 
              width={400}
              height={500}
              className={styles.bookImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
