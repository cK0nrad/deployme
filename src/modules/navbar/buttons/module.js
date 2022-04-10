import styles from './style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'



export default function NavButtons({name, icons, active}){
    return(
        <div className={styles.container}>
            <FontAwesomeIcon className={styles.icon} icon={icons} />
            <p className={styles.name}>{name}</p>
            {active?<FontAwesomeIcon className={styles.active} icon={faChevronLeft} />:false}
        </div>
    )
}