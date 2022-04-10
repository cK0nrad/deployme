import { faCube, faCubes, faServer, faNetworkWired} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import InstanceLocation from '../country/module';
import InstanceOS from '../os/module';
import InstanceSize from '../size/module';
import styles from './style.module.css';

export default function InstanceOptions() {

    const [country, setCountry] = useState("1");
    const [distrib, setDistrib] = useState("debian_11");
    const [size, setSize] = useState("1");

    return(
        <div className={styles.holder}>
            <div className={styles.countryList}>
                <p className={styles.title}>location</p>
                <InstanceLocation changeCountry={setCountry} country="Belgium" city="brussels" id="1" active={country==="1"?true:false}/>
                <InstanceLocation changeCountry={setCountry} country="France" city="paris" id="2" active={country==="2"?true:false}/>
                <InstanceLocation changeCountry={setCountry} country="Poland" city="warsow" id="3"  active={country==="3"?true:false}/>
                <InstanceLocation changeCountry={setCountry} country="Panama" city="panama" id="4" active={country==="4"?true:false}/>            </div>
            <div className={styles.osList}>
                <p className={styles.title}>os</p>
                <InstanceOS distrib="Debian" id="debian_11" changeDistrib={setDistrib} active={distrib==="debian_11"?true:false} />
                <InstanceOS distrib="Ubuntu" id="ubuntu_20.04" changeDistrib={setDistrib} active={distrib==="ubuntu_20.04"?true:false} />
                <InstanceOS distrib="CentOS" id="centos_8.4" changeDistrib={setDistrib} active={distrib==="centos_8.4"?true:false} />
                <InstanceOS distrib="RHEL" id="rhel_8.4" changeDistrib={setDistrib} active={distrib==="rhel_8.4"?true:false} />
            </div>
            <div className={styles.sizeList}>
                <p className={styles.title}>size</p>
                <InstanceSize id="1" active={size==="1"?true:false} changeSize={setSize} logo={faCube} ram="128" core="1" />
                <InstanceSize id="2" active={size==="2"?true:false} changeSize={setSize} logo={faCubes} ram="256" core="2" />
                <InstanceSize id="3" active={size==="3"?true:false} changeSize={setSize} logo={faServer} ram="512" core="4" />
                <InstanceSize id="4" active={size==="4"?true:false} changeSize={setSize} logo={faNetworkWired} ram="1024" core="8" />
            </div>
        </div>
    )
}