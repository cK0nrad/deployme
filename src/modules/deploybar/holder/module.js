import InstanceAmount from '../amount/module';
import DeployButton from '../deployButton/module';
import Price from '../price/module';
import styles from './style.module.css';


export default function DelpoyBar() {
    return(
        <div className={styles.holder}>
            <div className={styles.buttons}>
                <InstanceAmount/>
                <Price price="51.21" />
                <DeployButton/>
            </div>
        </div>
    )
}