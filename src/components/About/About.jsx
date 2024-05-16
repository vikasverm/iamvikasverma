import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
              My Name is Vikas Verma and I am From Lakhimpur Kheri Uttar Pradesh . and I am Staying in Surajpur Greater Noida Uttar Pradesh. and Currently I am Pursuing MCA From IIMT College Of Engineering Greater Noida . and before That I Have Completed My Bachelor Of Computer Application from GITM Lucknow. and prior to this I have completed my Schooling 12 th and 10 th From Government Inter College Lakhimpur Kheri. My Technical Skills are Html,Css,Javascript,React js,Node Js.
              </p>
            </div>
          </li>
        
         
        </ul>
      </div>
    </section>
  );
};
