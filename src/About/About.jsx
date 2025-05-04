import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.section} id="About">
      <h1 className={`section-header ${styles.header}`}>About</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      <img className={`${styles.img} img-container`} src="/profile.jpg"></img>
    </div>
  );
}

export default About;
