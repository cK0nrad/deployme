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
            <InstanceName />
            <div className={styles.usage}>
                <InstanceUsage title="bandwidth" total="2000gb" actual="40gb" />
                <CPUusage actual="5%" />
                <InstanceUsage title="ram" total="1024mb" actual="128mb" />
                <ServerDetails />
                <ServerDetails2 />
            </div>
        </div>
    );
}
