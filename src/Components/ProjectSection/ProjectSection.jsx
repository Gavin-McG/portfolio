// src/components/ProjectSection.jsx
import React, { useEffect, useState } from "react";
import ProjectBar from "./ProjectBar";
import styles from "./ProjectSection.module.css";
import projectsData from "../../Data/projects.json";

function ProjectSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectsData);
  }, []);

  return (
    <div className={styles.section} id="Projects">
      {data.map((bar, idx) => (
        <div key={idx} className={styles.barWrapper}>
          <h2 className={styles.header}>{bar.header}</h2>
          <ProjectBar
            projects={bar.projects}
            direction={idx % 2 === 0 ? "left" : "right"}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;
