"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split links for Desktop
  const leftLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Vivir', href: '/living-in-pueblito' },
    { name: 'Invertir', href: '/invest' },
    { name: 'Eventos', href: '/events' },
  ];

  const rightLinks = [
    { name: 'Master Plan', href: '/master-plan' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      
      {/* Element 1: Left Menu (Desktop) */}
      <ul className={`${styles.desktopMenu} ${styles.leftMenu}`}>
        {leftLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Element 2: Centered Logo */}
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          {/* White Logo (Default / Top) */}
          <div className={`${styles.logoWrapper} ${scrolled ? styles.hidden : ''}`}>
             <Image 
              src="/images/Logoblanco-300x112.png" 
              alt="Pueblito Caribeño Blanco" 
              fill 
              className={styles.logo}
              priority
            />
          </div>
          
          {/* Colored Logo (Scrolled / Solid Background) */}
           <div className={`${styles.logoWrapper} ${scrolled ? '' : styles.hidden}`}>
            <Image 
              src="/images/Logo_pueblito.png" 
              alt="Pueblito Caribeño Color" 
              fill 
              className={styles.logo}
              priority
            />
          </div>
        </Link>
      </div>

      {/* Element 3: Right Menu (Desktop) */}
      <ul className={`${styles.desktopMenu} ${styles.rightMenu}`}>
        {rightLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className={styles.mobileMenuBtn} onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${mobileOpen ? styles.open : ''}`}>
        <ul className={styles.mobileList}>
          {allLinks.map((link) => (
            <li key={link.name} onClick={() => setMobileOpen(false)}>
              <Link href={link.href} className={styles.mobileLink}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
