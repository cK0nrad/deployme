import styles from "./style.module.css";

export default function ServerDetails() {
    return (
        <div className={styles.holder}>
            <div className={styles.title}>Server info</div>
            <div className={styles.info}>
                <div className={styles.name}>
                    <p>Location:</p>
                    <p>IP Address:</p>
                    <p>Username:</p>
                    <p>Password:</p>
                </div>
                <div className={styles.details}>
                    <p>PARIS</p>
                    <p>192.168.1.1</p>
                    <p>root</p>
                    <p>a#er@!sdf!</p>
                </div>
            </div>
        </div>
    );
}
