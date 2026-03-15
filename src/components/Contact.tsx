import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>Get in Touch</span>
          </div>
          <h2 className={styles.title}>
            Begin Your <span className={styles.italic}>Alignment</span>
          </h2>
          <p className={styles.subtitle}>
            Ready to transform your space? Our experts are here to guide you through the process of energetic correction.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.formSide}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Service Interested In</label>
                <select>
                  <option>Vastu Architecture</option>
                  <option>Astro-Mapping</option>
                  <option>Energy Balancing</option>
                  <option>Corporate Vastu</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows={4} placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>

          <div className={styles.infoSide}>
            <div className={styles.infoItem}>
              <h3>Visit Our Studio</h3>
              <p>Eternal Harmony Plaza, Suite 108<br />Spiritual District, New Delhi, India</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Call Us</h3>
              <p>+91 98765 43210<br />Mon - Sat, 9am - 7pm</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email Us</h3>
              <p>hello@healingconsultancy.com<br />support@vastuexpert.com</p>
            </div>

            <div className={styles.socials}>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
