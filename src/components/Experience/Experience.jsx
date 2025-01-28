import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils"; // Ensure this function generates correct URLs

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const imageUrl = getImageUrl(skill.imageSrc); // Use the correct key from JSON
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={imageUrl} // Add the image source here
                    alt={skill.title}
                    className={styles.skillImage} // Optional: add a CSS class for styling
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
