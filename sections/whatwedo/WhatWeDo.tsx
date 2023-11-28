import React from "react";
import styles from "@/sections/whatwedo/styles.module.scss";
import TopEdgyWave from "@/svgs/topedgywave/TopEdgyWave";
import BottomEdgyWave from "@/svgs/bottomedgywave/BottomEdgyWave";
import Card from "@/components/card/Card";
import { whatWeCollect, whatWeDoSectionTexts } from "@/constants";
import CarouselScroll from "@/components/CarouselScroll/CarouselScroll";
import CircleToSquareMotionDiv from "@/components/circletosquaremotiondiv/CircleToSquareMotionDiv";
import SmallRotatingSquare from "@/components/smallrotatingsquare/SmallRotatingSquare";

const WhatWeDoSection = () => {
  return (
    <div className={styles.whatWeDoSection}>
      <TopEdgyWave />
      <div className={styles.whatWeDoContentTop}>
        <div className={styles.collectTitleWrapper}>
          <SmallRotatingSquare width="32px" height="32px" />
          <p className={styles.collectTitle}>
            {whatWeDoSectionTexts.EN.whatWeCollectText}
          </p>
        </div>

        <CarouselScroll>
          <>
            {whatWeCollect.EN.map((collectText, index) => (
              <Card
                mainText={collectText.collectText.text}
                description={collectText.collectText.description}
                key={index * 123}
              />
            ))}
          </>
        </CarouselScroll>
      </div>
      <div className={styles.whatWeDoContentBottom}></div>
      <BottomEdgyWave />
    </div>
  );
};

export default WhatWeDoSection;
