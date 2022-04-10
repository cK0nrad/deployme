import "./app.css"
import NavBar from '../../modules/navbar/holder/module';
import TopBar from '../../modules/topbar/holder/module';
import InstanceListHolder from '../../modules/instanceslist/holder/module';

export default function InstancesList() {
  return (
    <div className="app">
	    <NavBar/> 
      <div className="main">
        <TopBar/>
        <InstanceListHolder />
      </div>
    </div>
  );
}

