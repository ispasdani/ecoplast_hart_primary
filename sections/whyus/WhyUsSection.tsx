import React from "react";
import styles from "@/sections/whyus/styles.module.scss";
import { whyusSectionTexts } from "@/constants";

const WhyUsSection = () => {
  return (
    <div className={styles.whyusSection}>
      <div className={styles.whyusTop}>
        <h2>{whyusSectionTexts.EN.whyusFirstTitle}</h2>
        <h2>{whyusSectionTexts.EN.whyusSecondTitle}</h2>
      </div>
      <div className={styles.whyusBottom}>
        <div className={styles.whyusLeft}></div>
        <div className={styles.whyusRight}></div>
      </div>
    </div>
  );
};

export default WhyUsSection;
