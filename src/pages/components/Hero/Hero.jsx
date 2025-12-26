import React from "react";

import styles from "./Hero.module.css";

export default function HeroTest() {
  return (
    <div className={styles.container}>
      <div className={styles.shadow} />
      <div className={styles.hero}>
        <p className={styles.name}>FLAMALITY</p>
        <p className={styles.title}>
          Web Developer
          <span>+ UI/UX Designer</span>
        </p>
      </div>
    </div>
  );
}
