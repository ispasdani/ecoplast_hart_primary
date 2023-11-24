"use client";

import React, { useState } from "react";
import styles from "@/components/navbar/mobilenav/styles.module.scss";
import LogoTitle from "@/components/logotitle/LogoTitle";
import { navTexts } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.mobileNav}>
      <LogoTitle />
      <div
        className={`${isOpen ? styles.hamburgerX : styles.hamburger}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isOpen && (
        <div className={styles.mobileNavContent}>
          <div className={styles.mobileNavContentTop}>
            <Link href="whyus" className={styles.navLink}>
              {navTexts.EN.navLink1}
            </Link>
            <Link href="story" className={styles.navLink}>
              {navTexts.EN.navLink2}
            </Link>
            <Link href="whatwedo" className={styles.navLink}>
              {navTexts.EN.navLink3}
            </Link>
          </div>

          <div className={styles.mobileNavContentBottom}>
            <Link href="contact" className={styles.navLinkSpecial}>
              {navTexts.EN.navLink4}
            </Link>
            <p className={styles.navLinkSpecial}>{navTexts.EN.languageEn}</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
