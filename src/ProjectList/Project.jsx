// Project.jsx
import React from "react";
import styles from "./Project.module.css";

function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          className="img-container"
          src="/public/projects/SotF.png"
          style={{ opacity: "var(--img-opacity)" }}
        />
      </div>
      <div className={styles.content} style={{ opacity: "var(--text-opacity)" }}>
        <h1 className={styles.header}>Project Title</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>
        <div className={styles.skills}>
          <p className={styles.skill}>C#</p>
          <p className={styles.skill}>Unity</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
