import React from "react";

import styles from "./Project.module.css";

export default function Project({ title, image, desc, url, link, type }) {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <div className={styles.type}>
        <p>{type?.charAt(0).toUpperCase() + type?.slice(1)}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
      <a href={url} target='_blank' className={styles.link}>
        <p>{link}</p>
      </a>
    </div>
  );
}
