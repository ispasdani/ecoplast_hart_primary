import React from "react";
import HomeSection from "@/pages/homepage/HomeSection";
import styles from "@/app/home/styles.module.scss";

function Homepage() {
  return (
    <div className={styles.homePage}>
      <HomeSection />
    </div>
  );
}

export default Homepage;
