import styles from "./style.module.css";
import { Link  } from "react-router-dom";

export default function ManageButton({ row }) {
    
    return <Link to={`/manage/${row.id}`}><div className={styles.button}>Manage</div></Link>;
}
