import React from "react";
import styles from "../sections/Projects/Project.module.css";

function ProjectCard({ src, link, h3, p }) {
  return (
    <div>
      <a href={link} className={styles.projectA}>
        <img className={styles.projectimg} src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p} </p>
      </a>
    </div>
  );
}

export default ProjectCard;
