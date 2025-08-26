import styles from  "./NavBar.module.css"

function NavButton({ href, children }) {
    return (
        <a href={href} className={styles.button}>
            <div className={styles.item}>
                <h1 className={styles.label}>{children}</h1>
            </div>
        </a>
    );
}

export default NavButton