import styles from "./DevBlog.module.css";
import DevBlogEntry from "./DevBlogEntry";

function DevBlog() {
  return (
    <div className={styles.section} id="Devblog">
      <h1 className={`section-header ${styles.header}`}>DevBlog</h1>
      <div className={styles.logs}>
        <DevBlogEntry></DevBlogEntry>
        <DevBlogEntry></DevBlogEntry>
        <DevBlogEntry></DevBlogEntry>
        <div className={styles.button}>See More →</div>
      </div>
    </div>
  );
}

export default DevBlog;
