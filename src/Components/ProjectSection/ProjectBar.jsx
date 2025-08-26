import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectBar.module.css";

function ProjectBar({ projects, direction }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const baseSpeed = 0.1;
  const speedUp = 0.4;
  const maxSpeed = 1; 
  const speedLerpFactor = 0.02;

  // current speed and target speed
  const [speed, setSpeed] = useState(direction === "left" ? -baseSpeed : baseSpeed);
  const [targetSpeed, setTargetSpeed] = useState(direction === "left" ? -baseSpeed : baseSpeed);

  // helper to recalc width
  const recalcCardWidth = () => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(
        `.${styles.cardWrapper}`
      );
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + getSpeedInPx(2)); // include gap
      }
    }
  };

  // calculate on mount & whenever projects change
  useEffect(() => {
    recalcCardWidth();
  }, [projects]);

  // recalc on window resize
  useEffect(() => {
    window.addEventListener("resize", recalcCardWidth);
    return () => window.removeEventListener("resize", recalcCardWidth);
  }, []);

  const getSpeedInPx = (baseSpeed) => {
    return (baseSpeed / 100) * window.innerWidth; 
  };

  // continuous animation
  useEffect(() => {
    let frame;
    function animate() {
      // ease speed toward target speed
      setSpeed((prev) => {
        return prev + (targetSpeed - prev) * speedLerpFactor;
      });

      setOffset((prev) => prev + getSpeedInPx(speed));
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetSpeed, speed]);

  // wrapping logic
  const getWrappedStyle = (index) => {
    if (!cardWidth) return {};
    const totalWidth = projects.length * cardWidth;
    let x = (index * cardWidth + offset) % totalWidth;
    if (x < -cardWidth) x += totalWidth;
    if (x > totalWidth - cardWidth) x -= totalWidth;
    return { transform: `translateX(${x}px)` };
  };

  return (
    <div className={styles.projectBar}>
      <button
        onClick={() => {
          setSpeed(Math.max(-maxSpeed, Math.min(-baseSpeed-speedUp, speed-speedUp)));
          setTargetSpeed(-baseSpeed);
        }}
        className={styles.button}
        style={{ translate: "5.2vw " }}
      >
        ◀
      </button>
      <div ref={containerRef} className={styles.inner}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={styles.cardWrapper}
            style={getWrappedStyle(idx)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setSpeed(Math.min(maxSpeed, Math.max(baseSpeed+speedUp, speed+speedUp)));
          setTargetSpeed(baseSpeed);
        }}
        className={styles.button}
        style={{ translate: "-7vw " }}
      >
        ▶
      </button>
    </div>
  );
}

export default ProjectBar;