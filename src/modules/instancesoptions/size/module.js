import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.css';

export default function InstanceSize({id, active, changeSize, logo, ram, core}) {
    return(
        <div onClick={() => changeSize(id)}className={active ? `${styles.holder} ${styles.active}` : styles.holder}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={logo} />
            </div>
            <div className={styles.specsContainer}>
                <p className={styles.specs}>{core} VCore</p>
                <p className={styles.specs}>{ram} MB</p>
                <p className={styles.specs}>1 IPv4</p>
            </div>
        </div>
    )
}