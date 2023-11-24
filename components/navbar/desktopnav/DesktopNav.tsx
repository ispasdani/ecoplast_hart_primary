import React from "react";
import styles from "@/components/navbar/desktopnav/styles.module.scss";
import LogoTitle from "@/components/logotitle/LogoTitle";
import { navTexts } from "@/constants";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftNavSide}>
        <LogoTitle />
        <div>
          <Link href="whyus" className={styles.navLinkBig}>
            {navTexts.EN.navLink1}
          </Link>
          <Link href="story" className={styles.navLinkBig}>
            {navTexts.EN.navLink2}
          </Link>
          <Link href="whatwedo" className={styles.navLinkBig}>
            {navTexts.EN.navLink3}
          </Link>
        </div>
      </div>
      <div className={styles.rightNavSide}>
        <p className={styles.navLinkBigSpecial}>{navTexts.EN.navLink4}</p>
        <Link href="contact" className={styles.navLinkBigSpecial}>
          {navTexts.EN.languageEn}
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNav;
