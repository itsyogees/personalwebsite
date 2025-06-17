'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MySite
        </Link>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/pages/About" className={styles.link} onClick={closeMenu}>
            About
          </Link>
          <Link href="/pages/Services" className={styles.link} onClick={closeMenu}>
            Services
          </Link>
          <Link href="/pages/Blog" className={styles.link} onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/pages/Contact" className={styles.link} onClick={closeMenu}>
            Contact
          </Link>
        </nav>

     
        {isMenuOpen && (
          <div 
            className={styles.overlay} 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}