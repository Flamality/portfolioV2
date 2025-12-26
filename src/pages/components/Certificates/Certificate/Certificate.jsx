import React from "react";

import styles from "./Certificate.module.css";

export default function Certificate({ name, image, earned, by, link }) {
  return (
    <a href={link} target='__blank' className={styles.container}>
      <div className={styles.certificate}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.by}>{by}</p>
          <p className={styles.issued}>Issued {earned}</p>
        </div>
      </div>
    </a>
  );
}
