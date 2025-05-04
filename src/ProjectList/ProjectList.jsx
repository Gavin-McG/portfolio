import styles from "./ProjectList.module.css";
import Project from "./Project";

function ProjectList() {
  return (
    <div className={styles.section} id="Projects">
        <h1 className={`section-header ${styles.header}`}>Projects</h1>
        <div className={styles.projects}>
            <Project></Project>
            <Project></Project>
            <Project></Project>
        </div>
    </div>
  );
}

export default ProjectList;
