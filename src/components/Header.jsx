import styles from "./Header.module.css"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header>
            <div className={`container ${styles.container}`}>
                <img className={styles.logo} src={logo} alt="logo do site" />
            </div>
        </header>
    )
}

export default Header