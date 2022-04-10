import styles from "./style.module.css";

export default function Instance({ row }) {
    return (
        <div className={styles.holder}>
            <div className={styles.logo}>
                <div className={styles.status} />
            </div>
            <div className={styles.machina}>
                <div className={styles.title}>{row.name}</div>
                <div className={styles.specs}>
                    {row.core} VCore - {row.ram}Mb
                </div>
            </div>
        </div>
    );
}
