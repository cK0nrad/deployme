import styles from "./style.module.css";

export default function NavBar() {
    return (
        <div className={styles.holder}>
            <div className={styles.active}>details</div>
            <div>backup</div>
            <div>graphs</div>
            <div>migrate</div>
        </div>
    );
}
