import React from "react";
import styles from "@/sections/whyus/styles.module.scss";
import { whyusSectionTexts } from "@/constants";
import SmallRotatingSquare from "@/components/smallrotatingsquare/SmallRotatingSquare";
import VideoCard from "@/components/videocard/VideoCard";

const WhyUsSection = () => {
  return (
    <div className={styles.whyusSection}>
      <div className={styles.whyusTop}>
        <h2>{whyusSectionTexts.EN.whyusFirstTitle}</h2>
        <h2>{whyusSectionTexts.EN.whyusSecondTitle}</h2>
      </div>
      <div className={styles.whyusBottom}>
        <div className={styles.whyusLeft}>
          <div className={styles.leftSquareTextWrapper}>
            <SmallRotatingSquare />
            <p>{whyusSectionTexts.EN.whyusLeftText1}</p>
          </div>
          <div className={styles.leftSquareTextWrapper}>
            <SmallRotatingSquare />
            <p>{whyusSectionTexts.EN.whyusLeftText2}</p>
          </div>
          <div className={styles.leftSquareTextWrapper}>
            <SmallRotatingSquare />
            <p>{whyusSectionTexts.EN.whyusLeftText3}</p>
          </div>
          <div className={styles.leftSquareTextWrapper}>
            <SmallRotatingSquare />
            <p>{whyusSectionTexts.EN.whyusLeftText4}</p>
          </div>
        </div>
        <div className={styles.whyusRight}>
          <div className={styles.whyDecor}></div>
          <VideoCard
            videoPath="/videos/whyVideo.mp4"
            width="100%"
            videoTextBubble={whyusSectionTexts.EN.whyVideoText}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
