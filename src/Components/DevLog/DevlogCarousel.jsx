import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DevlogData from "../../Data/devlog.json";
import styles from "./DevlogCarousel.module.css";

function DevlogCard({ entry, color }) {
  return (
    <a href={entry.link} className={styles.card}>
      <img src={entry.image} alt={entry.header} className={styles.image} />
      <div className={styles.meta}>
        <span className={styles.date}>{entry.date}</span>
        <span
          className={styles.project}
          style={{ backgroundColor: color }}
        >
          {entry.project}
        </span>
      </div>
      <h3 className={styles.header}>{entry.header}</h3>
      <p className={styles.description}>{entry.description}</p>
    </a>
  );
}

export default function DevlogCarousel() {
  const { entries, projects } = DevlogData;
  const reversedEntries = [...entries].reverse();

  const [page, setPage] = useState(0);

  const logsPerPage = 3;
  const totalPages = Math.ceil(reversedEntries.length / logsPerPage);

  const handleNext = () => setPage((p) => (p + 1) % totalPages);
  const handlePrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const currentLogs = reversedEntries.slice(
    page * logsPerPage,
    page * logsPerPage + logsPerPage
  );

  return (
    <div className={styles.carousel} id="Devblog">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.logRow}
        >
          {currentLogs.map((entry, i) => (
            <DevlogCard
              key={i}
              entry={entry}
              color={projects[entry.project] || "#888"}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.navButton}>
          ⬅
        </button>

        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === page ? styles.activeDot : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>

        <button onClick={handleNext} className={styles.navButton}>
          ➡
        </button>
      </div>
    </div>
  );
}