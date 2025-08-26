import styles from "./Hero.module.css"

function Hero() {    
    return (
        <div className={styles.backdrop} id="top">
            <h1 className={styles.name}>Gavin McGinness</h1>
            <h2 className={styles.role}>Game Developer | Systems Programmer | Rendering</h2>
        </div>
    );
}


export default Hero
