import styles from "./DevBlogEntry.module.css";

function DevBlogEntry() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.img} img-container`}>
          {/* <img src="/src/assets/profile.jpg"></img> */}
        </div>
        <p className={styles.date}>1/1/25 → 1/1/25</p>
        <h1 className={styles.header}>Title</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </div>
  );
}

export default DevBlogEntry;
