import React from "react";
import styles from "./FeaturedProject.module.css";

function FeaturedProject({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.featuredProject}>
      <img src={project.thumbnail} alt={project.name} className={styles.thumbnail} />
      <div className={styles.text}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className={styles.techBox}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default FeaturedProject;