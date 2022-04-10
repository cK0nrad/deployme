import "./app.css"
import NavBar from '../../modules/navbar/holder/module';
import TopBar from '../../modules/topbar/holder/module';
import DeployBar from '../../modules/deploybar/holder/module';
import InstanceOptions from "../../modules/instancesoptions/holder/module";

export default function Deploy() {
  return (
    <div className="app">
	    <NavBar/> 
      <div className="main">
        <TopBar/>
        <InstanceOptions />
        <DeployBar/>
      </div>
    </div>
  );
}

