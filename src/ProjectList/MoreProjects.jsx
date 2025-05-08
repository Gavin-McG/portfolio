import React from "react";
import styles from "./MoreProjects.module.css";

function MoreProjects() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          className="img-container"
          src="/public/projects/MoreIcon.png"
          style={{ opacity: "var(--img-opacity)" }}
        />
      </div>
      <div className={styles.content} style={{ opacity: "var(--text-opacity)" }}>
        <h1 className={styles.button}>See More →</h1>
      </div>
    </div>
  );
}

export default MoreProjects;
