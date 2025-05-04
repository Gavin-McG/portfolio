import styles from "./Hero.module.css"

function Hero() {    
    return (
        <div className={styles.backdrop} id="top">
            <h1 className={styles.name}>Gavin McGinness</h1>
            <h2 className={styles.role}>Systems Programmer | Rendering | Shaders</h2>
        </div>
    );
}


export default Hero
