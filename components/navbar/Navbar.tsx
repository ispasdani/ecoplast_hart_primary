import React from "react";
import styles from "@/components/navbar/styles.module.scss";
import LogoTitle from "../logotitle/LogoTitle";
import { navTexts } from "@/constants";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftNavSide}>
        <LogoTitle />
        <ul>
          <li>{navTexts.EN.navLink1}</li>
          <li>{navTexts.EN.navLink2}</li>
          <li>{navTexts.EN.navLink3}</li>
        </ul>
      </div>
      <div className={styles.rightNavSide}>
        <p>{navTexts.EN.navLink5}</p>
        <p>{navTexts.EN.languageEn}</p>
      </div>
    </nav>
  );
};

export default Navbar;
