import styles from './style.module.css';


export default function InstanceOS({distrib, id, active, changeDistrib}) {
    return(
        <div onClick={() => changeDistrib(id)}className={active ? `${styles.holder} ${styles.active}` : styles.holder}>
            <div className={styles.logo}>
                <img src={"/img/distros/" + distrib.toLowerCase() + ".png"} alt={distrib}/>
            </div>
            <div className={styles.nameContainer}>
                <p className={styles.name}>{distrib}</p>
            </div>
        </div>
    )
}