import React from "react";
import styles from "@/components/logotitle/styles.module.scss";
import Image from "next/image";
import { navTexts } from "@/constants";

const LogoTitle = () => {
  return (
    <div className={styles.logoTitle}>
      <Image
        priority={true}
        src="/icons/recycleLogo.svg"
        width={26}
        height={26}
        alt="Company Logo"
        className={styles.navLogo}
      />
      <p className={styles.navTitle}>{navTexts.EN.navTitle}</p>
    </div>
  );
};

export default LogoTitle;
