import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <div className={styles.section}>
      <h1 className={`section-header ${styles.header}`}>Contacts</h1>
      <div role="grid" className={styles.table}>
        <a role="row" className={styles.row} href="https://www.linkedin.com/in/gavinmcginness/" target="_blank">
          <p role="cell" className={styles.site}>LinkedIn:</p>
          <p role="cell" className={styles.name}>Gavin McGinness</p>
        </a>
        <a role="row" className={styles.row} href="mailto:gavinmcg@umich.edu">
          <p role="cell" className={styles.site}>Email:</p>
          <p role="cell" className={styles.name}>gavinmcg@umich.edu</p>
        </a>
        <a role="row" className={styles.row} href="https://github.com/Gavin-McG" target="_blank">
          <p role="cell" className={styles.site}>Github:</p>
          <p role="cell" className={styles.name}>Gavin-McG</p>
        </a>
      </div>
    </div>
  );
}

export default Contacts;
