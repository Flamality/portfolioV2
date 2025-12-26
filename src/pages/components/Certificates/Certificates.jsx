import React from "react";

import styles from "./Certificates.module.css";
import Certificate from "./Certificate/Certificate";

export default function Certificates() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Certificates</p>
      <div className={styles.certificates}>
        <Certificate
          by='Sololearn'
          earned='Feb 12, 2025'
          image={require("../../../images/webdevelopmentcertificate.png")}
          name='Web Development'
          link='https://www.sololearn.com/certificates/CC-DVZJPKRT'
        />
        <Certificate
          by='Meta'
          earned='Feb 27, 2025'
          image={require("../../../images/CourseraNKZL3IA81W66.png")}
          name='Introduction to Front-end Development'
          link='https://www.coursera.org/account/accomplishments/verify/NKZL3IA81W66'
        />
        <Certificate
          by='Meta'
          earned='May 8, 2025'
          image={require("../../../images/CourseraO9728K32QK2E.png")}
          name='Programming with JavaScript'
          link='https://www.coursera.org/account/accomplishments/verify/O9728K32QK2E'
        />
      </div>
    </div>
  );
}
