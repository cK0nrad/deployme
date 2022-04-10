import "./app.css";
import NavBar from "../../modules/navbar/holder/module";
import TopBar from "../../modules/topbar/holder/module";
import InstanceGraph from "../../modules/instance/instancegraph/module";
//import InstanceDetails from "../../modules/instance/instancedetails/module";
export default function ManageInstance() {
    return (
        <div className="app">
            <NavBar />
            <div className="main">
                <TopBar />
                <InstanceGraph />
            </div>
        </div>
    );
}
