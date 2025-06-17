'use client';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logo}>
              MySite
            </Link>
            <p className={styles.tagline}>Building digital experiences</p>
          </div>

          <div className={styles.links}>
            <h3 className={styles.linksTitle}>Quick Links</h3>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/services" className={styles.link}>Services</Link>
            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          <div className={styles.social}>
            <h3 className={styles.socialTitle}>Connect</h3>
            <div className={styles.socialLinks}>
              <Link href="#" className={styles.socialLink}>Twitter</Link>
              <Link href="#" className={styles.socialLink}>LinkedIn</Link>
              <Link href="#" className={styles.socialLink}>GitHub</Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}