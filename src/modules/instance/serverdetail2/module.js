import styles from "./style.module.css";

export default function ServerDetails2() {
    return (
        <div className={styles.holder}>
            <div className={styles.title}>Server specs</div>
            <div className={styles.info}>
                <div className={styles.name}>
                    <p>CPU:</p>
                    <p>RAM:</p>
                    <p>Storage:</p>
                    <p>Bandwidth:</p>
                </div>
                <div className={styles.details}>
                    <p>2 VCore</p>
                    <p>1024MB</p>
                    <p>20GB</p>
                    <p>2000GB</p>
                </div>
            </div>
        </div>
    );
}
