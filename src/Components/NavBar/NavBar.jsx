import NavButton from "./NavButton"
import styles from  "./NavBar.module.css"

function NavBar() {
    const navItems = ["About", "Projects", "Devblog", "Jams", "Contact"];
    
    return (
        <div className={styles.container} id="navbar">
            {navItems.map(item => (
                <NavButton key={item} href={`#${item}`}>{item}</NavButton>
            ))}
        </div>
    );
}



export default NavBar
