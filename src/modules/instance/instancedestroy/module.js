import styles from "./style.module.css";
import NavBar from "../navbar/module";
import InstanceName from "../title/module";
import InstanceUsage from "../usage/module";
import CPUusage from "../CPUusage/module";
import ServerDetails from "../serverdetail/module";
import ServerDetails2 from "../serverdetail2/module";

export default function InstanceDetails() {
    return (
        <div className={styles.holder}>
            <NavBar />
        </div>
    );
}
