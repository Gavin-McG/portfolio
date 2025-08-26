import React, { useEffect, useState } from "react";
import styles from "./AboutMe.module.css";
import ImageCarousel from "./ImageCarousel";
import data from "../../Data/about.json";

function AboutMe() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // In case JSON is remote: fetch("/about.json").then...
    setAboutData(data);
  }, []);

  if (!aboutData) return null;

  return (
    <section className={styles.container} id="About">
      <div className={styles.leftColumn}>
        <h2 className={styles.header}>{aboutData.about.header}</h2>
        <p className={styles.description}>{aboutData.about.description}</p>
      </div>
      <div className={styles.rightColumn}>
        <ImageCarousel images={aboutData.images} interval={4000} />
      </div>
    </section>
  );
}

export default AboutMe;
