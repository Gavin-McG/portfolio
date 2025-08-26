import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <a href={project.link} className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.image} />
      <div className={styles.overlay}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
