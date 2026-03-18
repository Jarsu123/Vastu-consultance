"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AstrologySymbol } from "./CelestialDecor";
import VastuMandala from "./VastuMandala";
import styles from "./Contact.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Vaastu Correction",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    const whatsAppMessage = `Hello, I'm ${name}.\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    window.open(`https://wa.me/919582252374?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* Background World */}
      <VastuMandala />
      
      <div className={styles.sideDecoration}>
        <div className={styles.decorativeLine}></div>
        <span className={styles.decorativeText}>EST. 2008</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <motion.div 
          className={styles.header}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className={styles.badge} variants={fadeInUp}>
            <div className={styles.dot}></div>
            <span className={styles.badgeText}>Direct Connection</span>
          </motion.div>
          
          <motion.h2 className={styles.title} variants={fadeInUp}>
            Ready to <span className={styles.italic}>Transform</span><br />
            Your Living <span className={styles.outline}>Dimensions?</span>
          </motion.h2>
          
          <motion.p className={styles.subtitle} variants={fadeInUp}>
            Step into the sanctuary of balanced architecture. Our consultants are ready to harmonize your spatial reality via WhatsApp.
          </motion.p>
        </motion.div>

        <div className={styles.mainContent}>
          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.glassCard}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>NAME *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>PHONE *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>EMAIL ADDRESS (OPTIONAL)</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>SERVICE PATH *</label>
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a Service</option>
                    <option>Vedic Numerology</option>
                    <option>Name Correction</option>
                    <option>Watch Analysis</option>
                    <option>Business Numerology</option>
                    <option>Vaastu Correction</option>
                    <option>Astrology</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label>MESSAGE (OPTIONAL)</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3} 
                    placeholder="Tell us about your space and goals (Optional)..."
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  <span className={styles.btnText}>SUBMIT</span>
                  <div className={styles.btnIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div 
            className={styles.infoContainer}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div className={styles.infoBlock} variants={fadeInUp}>
              <span className={styles.blockNum}>01</span>
              <div className={styles.blockContent}>
                <h4>Studio Address</h4>
                <p>Eternal Harmony Plaza, Suite 108<br />Spiritual District, New Delhi</p>
              </div>
            </motion.div>

            <motion.div className={styles.infoBlock} variants={fadeInUp}>
              <span className={styles.blockNum}>02</span>
              <div className={styles.blockContent}>
                <h4>Direct Link</h4>
                <p>+91 9582252374<br />hello@vastu.spirit</p>
              </div>
            </motion.div>

            <motion.div className={styles.socialGrid} variants={fadeInUp}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>INSTAGRAM</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>LINKEDIN</span>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
      {/* Absolute Bottom Decoration */}
      <div className={styles.bottomBar}>
        <div className={styles.barLine}></div>
        <div className={styles.copyright}>© 2026 HEALING CONSULTANCY. ALL RIGHTS RESERVED.</div>
      </div>
    </section>
  );
}
