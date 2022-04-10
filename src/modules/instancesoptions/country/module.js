import styles from './style.module.css';


export default function InstanceLocation({country, city, id, active, changeCountry}) {
    return(
        <div onClick={() => changeCountry(id)} className={active ? `${styles.holder} ${styles.active}` : styles.holder}>
            <div className={styles.flag} >
                <img src={"/img/flag/" + country + ".png"} alt={country}/>
            </div>
            <div className={styles.councity}>
                <p className={styles.city}>{city}</p>
                <p className={styles.country}>{country}</p>
            </div>
        </div>
    )
}