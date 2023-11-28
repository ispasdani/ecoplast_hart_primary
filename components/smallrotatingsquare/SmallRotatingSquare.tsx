import React from "react";
import styles from "@/components/smallrotatingsquare/styles.module.scss";

type SquareProps = {
  width?: string;
  height?: string;
};

const SmallRotatingSquare = ({ width, height }: SquareProps) => {
  return (
    <div
      className={styles.smallRotatingSquare}
      style={{ width: width, height: height }}
    ></div>
  );
};

export default SmallRotatingSquare;
