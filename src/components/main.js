import Home from "./home";
import SideNav from "./menu"
import styles from "../styles/main.module.scss"
export default function Main() {
    return (
        <div className={styles.main}>
            <SideNav />
            <Home />
        </div>
    )
}