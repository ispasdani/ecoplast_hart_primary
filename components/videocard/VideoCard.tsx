import React from "react";
import styles from "@/components/VideoCard/styles.module.scss";
import { homeSectionTexts } from "@/constants";

type VideoCardProps = {
  videoPath: string;
  width: string;
};

const VideoCard = ({ videoPath, width }: VideoCardProps) => {
  return (
    <div className={styles.videoCard} style={{ width: `${width}` }}>
      <video loop autoPlay muted className={styles.videoPlayer}>
        <source src={`${videoPath}`} type="video/mp4" />
      </video>

      <a className={styles.videoCardText} href="">
        {homeSectionTexts.EN.heroVideoText}
      </a>
    </div>
  );
};

export default VideoCard;
