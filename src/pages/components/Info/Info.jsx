import React, { useEffect, useState } from "react";

import styles from "./Info.module.css";
import Skill from "./Skill";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
import {
  FaClock,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaLocationArrow,
  FaLocationDot,
  FaMapPin,
} from "react-icons/fa6";
import Certificates from "../Certificates/Certificates";

export default function Info() {
  const [tab, setTab] = useState("info");
  const [myTime, setMyTime] = useState("0:00:00 AM");
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const estTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "America/New_York",
      });
      setMyTime(estTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {tab === "info" ? (
          <>
            <div className={styles.section}>
              <p className={styles.label}>Introduction</p>
              <p className={styles.text}>
                Hello! My name is Remi 👋! I am a web developer with expertise
                in React. I specialize in building modern, responsive, and
                user-friendly applications. I have experience working with
                real-time databases, authentication systems, and creating smooth
                UI/UX experiences. I'm always looking to improve my skills and
                take on new challenges!
              </p>
            </div>
            <div className={styles.section}>
              <p className={styles.label}>My Expertise</p>
              <div className={styles.skills}>
                <Skill
                  Icon={<SiReact style={{ color: "#00d8ff" }} />}
                  skill='React'
                  color='#00d8ff'
                />
                <Skill
                  Icon={<SiJavascript style={{ color: "#ffd708" }} />}
                  skill='JavaScript'
                  color='#ffd708'
                />
                <Skill
                  Icon={<SiTypescript style={{ color: "#007acc" }} />}
                  skill='TypeScript'
                  color='#007acc'
                />
              </div>
            </div>
            <div className={styles.info_group}>
              <div>
                <FaLocationDot />
                <p>Mentor, Ohio, USA</p>
              </div>
              <div>
                <FaGraduationCap />
                <p>High School Junior</p>
              </div>
              <div>
                <FaClock />
                <p>{myTime}</p>
              </div>
            </div>
          </>
        ) : (
          <Certificates />
        )}
        <div className={styles.links}>
          <a href='https://github.com/Flamality' target='_blank'>
            <FaGithub />
          </a>
          <a href='https://Flamality.com' target='_blank'>
            <FaGlobe />
          </a>
        </div>
        <div className={styles.tabs}>
          <p
            className={tab === "info" ? styles.active : ""}
            onClick={() => setTab("info")}
          >
            Introduction
          </p>
          <p
            className={tab === "certificates" ? styles.active : ""}
            onClick={() => setTab("certificates")}
          >
            Certificates
          </p>
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.icon_bg} />
        <div className={styles.icon_accent} />
        <div className={styles.icon_image}>
          <div className={styles.image_container}>
            <img
              src={"https://flamality.com/images/Mizu3.png"}
              alt='Mizu Icon'
            />
          </div>
          <div className={styles.portal} />
        </div>
      </div>
    </div>
  );
}
