import InstanceGraph from "../graph/module";
import styles from "./style.module.css";

export default function CPUusage({ actual }) {
    return (
        <div className={styles.holder}>
            <div className={styles.title}>CPU</div>
            <div className={styles.info}>
                <div className={styles.percentage}>{actual}</div>
                <div className={styles.graph}>
                    <InstanceGraph data={[40, 30, 60, 40, 50]} unit="%" />
                </div>
            </div>
        </div>
    );
}
//eslint-disable-next-line
let test = {
    160012: 25,
    160013: 33,
    160014: 15,
    160015: 100,
    160016: 100,
    160017: 100,
    160018: 13,
    160019: 2,
    160020: 15,
    160021: 28,
    160022: 100,
};
