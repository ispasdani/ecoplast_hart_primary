import React from "react";
import styles from "@/components/card/styles.module.scss";
import Image from "next/image";

type CardProps = {
  backgroundImage?: string;
  mainText?: string;
  description?: string;
};

const Card = ({ backgroundImage, mainText, description }: CardProps) => {
  return (
    <div
      className={styles.doCard}
      style={{
        backgroundImage: `url(/images/${mainText
          ?.toString()
          .toLowerCase()
          .replace(/[\s-]/g, "")}.jpg)`,
      }}
    >
      <div className={styles.cardFirstBanner}>
        <p>{mainText?.toString().toUpperCase()}</p>
        <Image
          src="/icons/arrowLeft.svg"
          width={40}
          height={30}
          alt="Card Arrow"
          className={styles.cardBannerIcon}
        />
      </div>
      <div className={styles.cardBannerReveal}>{description}</div>
    </div>
  );
};

export default Card;
