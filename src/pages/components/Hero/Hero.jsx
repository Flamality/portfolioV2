import React from "react";

import styles from "./Hero.module.css";

export default function HeroTest() {
  return (
    <div className={styles.container}>
      <div className={styles.shadow} />
      <div className={styles.hero}>
        <p className={styles.title}>FLAMALITY</p>
        <p className={styles.role}>
          Web Developer
          <div>+ UI/UX Designer</div>
        </p>
      </div>
    </div>
  );
}
