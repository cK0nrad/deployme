import { faPowerOff, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

export default function InstanceName() {
    return (
        <div className={styles.holder}>
            <div className={styles.logo}>
                <div className={styles.status} />
            </div>
            <div className={styles.info}>
                <p className={styles.title}>My big server !!</p>
                <p className={styles.ip}>192.168.0.0 | PARIS</p>
            </div>
            <div className={styles.actions}>
                <FontAwesomeIcon icon={faSyncAlt} />
                <FontAwesomeIcon icon={faPowerOff} />
            </div>
        </div>
    );
}
