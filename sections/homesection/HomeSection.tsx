import CircleToSquareMotionDiv from "@/components/circletosquaremotiondiv/CircleToSquareMotionDiv";
import VideoCard from "@/components/videocard/VideoCard";
import { homeSectionTexts } from "@/constants";
import styles from "@/sections/homesection/styles.module.scss";
import React from "react";

const HomeSection = () => {
  return (
    <div className={styles.homeSection}>
      <h1 className={styles.heroTitle}>{homeSectionTexts.EN.heroTitle}</h1>
      <div className={styles.homeSectionLeft}>
        <div className={styles.contactUsDecor}>
          <CircleToSquareMotionDiv />
          <p>{homeSectionTexts.EN.heroContact}</p>
        </div>
        <div className={styles.heroTextBox}>
          <p>{homeSectionTexts.EN.heroPText1}</p>
          <p>{homeSectionTexts.EN.heroPText2}</p>
        </div>
      </div>
      <div className={styles.homeSectionRight}>
        <div className={styles.heroTextBoxRight}>
          <p>{homeSectionTexts.EN.heroPText1}</p>
          <p>{homeSectionTexts.EN.heroPText2}</p>
        </div>
        <div className={styles.homeDecorBox}></div>
        <VideoCard videoPath="/videos/videoHeroPage.mp4" width="100%" />
      </div>
    </div>
  );
};

export default HomeSection;
