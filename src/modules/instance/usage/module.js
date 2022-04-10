import styles from "./style.module.css";

export default function InstanceUsage({ title, actual, total }) {
    return (
        <div className={styles.holder}>
            <div className={styles.title}>{title}</div>
            <div className={styles.info}>
                <div className={styles.alignlower}>
                    <div className={styles.actual}>{actual}</div>
                    <div className={styles.total}>/{total}</div>
                </div>
            </div>
        </div>
    );
}
