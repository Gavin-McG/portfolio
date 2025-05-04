import styles from "./GameJam.module.css";

function GameJam() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.img} img-container`}>
          {/* <img src="/src/assets/profile.jpg"></img> */}
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.header}>Project Title</h1>
          <p className={styles.text}>
            Brief game description spanning 2 lines. A little bit extra here.
          </p>
          <p className={styles.date}>September 2025</p>
        </div>
      </div>
    </div>
  );
}

export default GameJam;
