import React from "react";

import styles from "./Projects.module.css";
import Project from "./Project/Project";

export default function Projects() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        PROJECT<span>S</span>
      </p>
      <div className={styles.projects}>
        <Project
          type='client'
          title='Adrionic.xyz'
          desc='A personal website for the content creator "Adrionic"'
          image={require("../../../images/adrionicxyzshot1.png")}
          link='View Website'
          url='https://adrionic.xyz'
          i={1}
        />
        <Project
          type='extracurricular'
          title='MHS Pride Club'
          desc='A website made for A schools Pride Club!'
          image={require("../../../images/mhsprideclub.png")}
          link='View Website'
          url='https://mhspride.club'
          i={2}
        />
        <Project
          type='personal'
          title='Portfolio'
          desc='My portfolio'
          image={require("../../../images/portfolio.png")}
          link="You're already here silly!"
          url='https://portfolio.flamality.com'
          i={3}
        />
        <Project
          type='personal'
          title='My website'
          desc='My little website, theres actually alot here.'
          image={require("../../../images/flamalitycom.png")}
          link='View Website'
          url='https://flamality.com'
          i={4}
        />
        <Project
          type='hmmm... seems a little empty'
          title='Wanna be here?'
          desc='Contact me and your project I work on could be here!'
          link='Email me'
          url='mailto:remi@flamality.com'
          i={5}
        />
      </div>
    </div>
  );
}
