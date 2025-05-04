import styles from "./Project.module.css";

function Project() {
  return (
    <div className={styles.container}>
      <div>
        <div className={`${styles.img} img-container`}>
          {/* <img src="/src/assets/profile.jpg"></img> */}
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>Project Title</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <a className={styles.link}>Link →</a>
      </div>
    </div>
  );
}

export default Project;
