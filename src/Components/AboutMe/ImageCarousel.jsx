import React, { useEffect, useState, useRef } from "react";
import styles from "./ImageCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageCarousel({ images, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = (index) => {
    setCurrent((index + images.length) % images.length);
    resetTimer();
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, interval);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [images, interval]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`${styles.image} ${
            i === current ? styles.active : styles.inactive
          }`}
        />
      ))}

      <button className={`${styles.navBtn} ${styles.left}`} onClick={prev}>
        <ChevronLeft />
      </button>
      <button className={`${styles.navBtn} ${styles.right}`} onClick={next}>
        <ChevronRight />
      </button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i === current ? styles.activeDot : ""
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;