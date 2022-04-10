import InstanceGraph from "../graph/module";
import styles from "./style.module.css";

export default function UsageGraph({ title, data, unit }) {
    return (
        <div className={styles.holder}>
            <div className={styles.title}>{title}</div>
            <div className={styles.graph}>
                <InstanceGraph data={data} unit={unit} />
            </div>
        </div>
    );
}
