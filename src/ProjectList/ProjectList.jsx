import React, { useRef, useEffect, useState } from "react";
import Project from "./Project";
import styles from "./ProjectList.module.css";

const TOTAL_PROJECTS = 4;

function ProjectList() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [progress, setProgress] = useState(0); // For animations

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight; // when container top reaches top
      const end = -containerRect.height + viewportHeight; // when container bottom reaches bottom

      // clamp progress from 0 to 1
      const total = start - end - viewportHeight;
      const current = start - containerRect.top - viewportHeight;
      const clampedProgress = Math.min(Math.max(current / total, 0), 1);

      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={styles.container} id="Projects">
      <div ref={stickyRef} className={styles.stickyContent}>
        {Array.from({ length: TOTAL_PROJECTS }, (_, index) => (
          <Project
            key={index}
            index={index}
            total={TOTAL_PROJECTS}
            progress={progress}
          />
        ))}
        <img className={styles.gear} src="./public/projects/Gear.png" />
      </div>
    </div>
  );
}

export default ProjectList;
