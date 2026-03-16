import Image from "next/image";
import { AstrologySymbol } from "./CelestialDecor";
import RashiWheel from "./RashiWheel";
import styles from "./BuyBook.module.css";

export default function BuyBook() {
  return (
    <section id="book" className={styles.buyBook}>
      {/* Light Theme Background Animations */}
      <div className={styles.lightBackground}>
        <div className={styles.floatingGlow}></div>
        <div className={styles.lightRays}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.ray} style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              opacity: 0.1 + (i % 3) * 0.05
            }}></div>
          ))}
        </div>
      </div>
      
      <div className={styles.wheelWrapper}>
        <RashiWheel />
      </div>
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
              Number's <span className={styles.italic}>Magic</span>
            </h2>
            <p className={styles.subtitle}>By Numerologist Shalu Singh</p>
            
            <div className={styles.summaryBox}>
              <h3 className={styles.summaryTitle}>Brief Summary</h3>
              <p className={styles.description}>
                "Number's Magic" is a profound exploration into the world of Numerology, where ancient wisdom meets modern practical application. This book reveals how numerical vibrations influence every aspect of our lives—from our names and birth dates to our business success and spatial harmony. 
                <br /><br />
                Shalu Singh expertly guides readers through the intricate relationship between numbers and energy, providing actionable remedies and insights that can transform one's destiny. The book dives deep into the psychology of digits, explaining how each number carries a unique frequency that resonates with the universe. 
                <br /><br />
                <strong>What's Inside:</strong>
                <br />
                • <b>Predictive Numerology:</b> Master the art of forecasting trends and identifying favorable periods for big life decisions.
                <br />
                • <b>Name Correction:</b> Learn the science of balancing your name's vibration to sync with your birth path for maximum success.
                <br />
                • <b>Spatial Synergy:</b> Discover how to optimize your living or work environment using the combined power of Vastu and Numerology.
                <br />
                • <b>Relationship Harmony:</b> Build deeper connections by understanding the numerical compatibility between partners, friends, and colleagues.
                <br /><br />
                Whether you are a newcomer seeking personal clarity or a professional seeking to enhance your consultancy, this masterclass is a definitive guide to attracting prosperity, peace, and purpose into your life through the hidden magic of numbers.
              </p>
            </div>

            <ul className={styles.features}>
              <li>Master the art of Predictive Numerology</li>
              <li>Learn Name and Business Correction techniques</li>
              <li>Understand Relationship Compatibility through numbers</li>
              <li>Discover the synergy between Vastu and Numerology</li>
            </ul>

            <div className={styles.actions}>
              <div className={styles.btnGroup}>
                <a 
                  href="https://www.amazon.in/Numbers-Magic-Numerology-Shalu-Singh/dp/B0D4R3FRYX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.amazonBtn}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.977 14.637c-1.127.873-2.903 1.258-4.22 1.258-2.016 0-3.61-.837-3.951-2.07-.061-.22-.053-.45.1-.64.152-.19.37-.306.607-.318l3.961-.205c.243-.013.468.102.61.31.2.3.26.68.16 1.05-.1.38-.34.7-.66.9zm4.276-2.025c.08-.184.094-.396.04-.59-.054-.196-.178-.363-.35-.47-.17-.107-.375-.152-.575-.125l-2.083.272c-.198.026-.375.13-.487.29-.112.16-.153.36-.112.556.04.19.146.36.3.483.155.123.35.18.544.156l1.373-.18c.036.14-.01.29-.12.4-.33.32-.93.58-1.57.58-.93 0-1.68-.53-1.68-1.55 0-1.28.98-1.89 2.53-1.89.2 0 .4.01.59.03.1.01.21-.01.3-.06.09-.05.15-.13.18-.23l.1-.34c.04-.15.01-.31-.08-.43-.09-.12-.24-.19-.39-.19l-.51-.01c-.24 0-.48-.02-.72-.02-2.3 0-4.08 1.07-4.08 3.51 0 1.83 1.05 3.14 2.87 3.14.93 0 1.83-.34 2.5-1.02.08.1.18.17.29.21.11.04.23.06.35.03l.97-.24c.2-.05.35-.19.41-.38.06-.19.03-.4-.08-.56-.16-.23-.21-.47-.15-.71zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  Buy from Amazon
                </a>
                <a 
                  href="https://www.flipkart.com/search?q=number%27s+magic+book+by+shalu+Singh+" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.flipkartBtn}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M7 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-3.99L18.52 14c.45 0 .82-.37.82-.82v-6.36c0-.45-.37-.82-.82-.82h-14.8l-.94-2H1v2h2l3.6 7.59L5.25 17H19v-2H8.1l.66-1.34M7 8V6h5v2H7m0 8V14h5v2H7z"/>
                  </svg>
                  Buy from Flipkart
                </a>
              </div>
              <span className={styles.deliveryInfo}>*Secure transaction via Official Portals</span>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/numbers-magic-cover.png" 
              alt="Number's Magic: A Guide to Numerology by Shalu Singh" 
              width={400}
              height={600}
              className={styles.bookImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
