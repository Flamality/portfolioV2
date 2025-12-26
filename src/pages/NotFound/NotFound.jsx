import React from "react";

import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.errorCode}>404</p>
      <p className={styles.errorMessage}>Page not found</p>
    </div>
  );
}
