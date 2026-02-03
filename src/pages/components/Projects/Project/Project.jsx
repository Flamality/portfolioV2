import React, { useEffect, useState } from "react";

import styles from "./Project.module.css";
import { useInView } from "react-intersection-observer";
import { avatars } from "../../../../services/appwrite";

export default function Project({ title, image, desc, url, link, type, i }) {
  const [animate, setAnimate] = useState(false);
  const [img, setImg] = useState(null);
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  useEffect(() => {
    if (!url || !url.startsWith("http")) return;
    const res = avatars.getScreenshot({
      url: url,
      sleep: 1,
    });
    setImg(res);
  }, [url]);
  return (
    <div
      className={styles.container + (animate ? ` ${styles.animate}` : "")}
      style={{ "--i": i }}
      ref={ref}
    >
      {img && <img src={img || image} className={styles.image} />}
      <div className={styles.imageOverlay} />
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
