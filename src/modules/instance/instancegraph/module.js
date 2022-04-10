import styles from "./style.module.css";
import NavBar from "../navbar/module";
import UsageGraph from "../usagegraphs/module";

export default function InstanceGraph() {
    return (
        <div className={styles.holder}>
            <NavBar />
            <div className={styles.title}>GRAPHS</div>
            <div className={styles.usage}>
                <UsageGraph title={"cpu usage over time"} data={[0, 25, 100, 0, 38]} unit="%" />
                <UsageGraph title={"ram usage over time"} data={[450, 320, 117, 253, 35]} unit="%" />
                <UsageGraph title={"network input"} data={[40, 100, 100, 100, 50]} unit="%" />
                <UsageGraph title={"network output"} data={[40, 100, 100, 100, 50]} unit="%" />
            </div>
        </div>
    );
}
