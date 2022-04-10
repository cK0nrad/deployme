import React, { useState } from 'react';
import styles from './style.module.css';

export default function InstanceAmount() {

    const [amount, setAmount] = useState(1);
    const update = (mol) => {
        if(mol && amount <10){
            setAmount(amount+1)
        }else if(!mol && amount > 1){
            setAmount(amount-1)
        }
         
    }

    return(
        <div className={styles.holder}>
            <div className={styles.add} onClick={() => update(false)}>
                <p>-</p>
            </div>

            <div className={styles.total}>
                <p>{amount}</p>
            </div>
            <div className={styles.remove} onClick={() => update(true)}>
                <p>+</p>
            </div>
        </div>
    )
}