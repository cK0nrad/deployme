import styles from './style.module.css';
import NavButtons from '../buttons/module';
import { faServer, faList } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Link  } from "react-router-dom";


export default function NavBar() {
    let path = useLocation().pathname;

    return(
        <div className={styles.holder}>
            <Link to="/create">
                <NavButtons name="new instance" icons={faServer} active={path==="/create"}/>
            </Link>

            <Link to="/list">
                <NavButtons name="instances list" icons={faList} active={path==="/list" || path.split("/")[1] === "manage"} />
            </Link>
        </div>
    )
}