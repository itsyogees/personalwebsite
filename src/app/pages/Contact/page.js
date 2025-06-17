"use client";
import { 
  FaLinkedin, 
  FaGithub, 
  FaYoutube, 
  FaTwitter, 
  FaInstagram,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import styles from "./Contact.module.scss";

export default function page() {
  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/yourusername" },
    { icon: <FaYoutube />, name: "YouTube", url: "https://youtube.com/yourchannel" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/yourhandle" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/yourprofile" }
  ];

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have questions or want to discuss a project? Reach out through any of these channels.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>Send a Message</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={styles.input}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={styles.input}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Your Message</label>
                  <textarea 
                    id="message" 
                    className={styles.textarea}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  <FaPaperPlane className={styles.buttonIcon} /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              
              <div className={styles.infoCard}>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={styles.infoIcon} />
                  <div>
                    <h3 className={styles.infoTitle}>Location</h3>
                    <p className={styles.infoText}>San Francisco, CA</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <FaPhone className={styles.infoIcon} />
                  <div>
                    <h3 className={styles.infoTitle}>Phone</h3>
                    <p className={styles.infoText}>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <FaEnvelope className={styles.infoIcon} />
                  <div>
                    <h3 className={styles.infoTitle}>Email</h3>
                    <p className={styles.infoText}>contact@yourdomain.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Connect With Me</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className={styles.newsletter}>
                <h3 className={styles.newsletterTitle}>Join My Newsletter</h3>
                <p className={styles.newsletterText}>
                  Get weekly tech tips and updates delivered to your inbox
                </p>
                <form className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={styles.newsletterInput}
                    required
                  />
                  <button type="submit" className={styles.newsletterButton}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}