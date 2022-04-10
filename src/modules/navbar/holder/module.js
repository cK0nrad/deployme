import styles from './style.module.css';
import NavButtons from '../buttons/module';
import { faServer, faList } from '@fortawesome/free-solid-svg-icons'



export default function NavBar() {
    return(
        <div className={styles.holder}>
            <NavButtons name="new instance" icons={faServer} />
            <NavButtons name="instances list" icons={faList} active/>
        </div>
    )
}