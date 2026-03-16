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
              <span className={styles.badgeText}>Number Magic Book</span>
            </div>
            <h2 className={styles.title}>
              Number's <span className={styles.italic}>Magic</span>
            </h2>
            <p className={styles.subtitle}>By Numerologist Shalu Singh</p>
            
            <div className={styles.summaryBox}>
              <h3 className={styles.summaryTitle}>About the Book</h3>
              <p className={styles.description}>
                "Number's Magic" explains how numbers help you. It shows how dates and names affect your success, money, and peace at home.
                <br /><br />
                Shalu Singh shows you how to use numbers to change your life for the better.
                <br /><br />
                <strong>What's Inside:</strong>
                <br />
                • <b>Future Planning:</b> Learn how to plan your big moves using numbers.
                <br />
                • <b>Better Luck:</b> Fix your name's spelling to get more success.
                <br />
                • <b>Home Harmony:</b> Use Vastu and numbers together for a happy house.
                <br />
                • <b>Good Relationships:</b> Understand people better with their numbers.
              </p>
            </div>

            <ul className={styles.features}>
              <li>Learn how numbers plan your future</li>
              <li>Fix your name for better luck</li>
              <li>Make your relationships better</li>
              <li>Vastu tips for a happy home</li>
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
