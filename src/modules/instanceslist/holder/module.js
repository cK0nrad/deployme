import styles from "./style.module.css";
import "./theme.css";
import DataTable, { createTheme } from "react-data-table-component";
import Instance from "../instance/module";
import ManageButton from "../managebutton/module";

createTheme("solarized", {
    text: {
        primary: "#0a1931",
        secondary: "#3c3c3c",
    },
});

const columns = [
    {
        name: "Name",
        selector: (row) => row.name,
        cell: (row) => <Instance row={row} />,
        sortable: true,
        grow: 2,
        minWidth: "160px",
    },
    {
        name: "IP",
        selector: (row) => row.ip,
        sortable: true,
        center: true,
        compact: true,
    },
    {
        name: "Creation",
        selector: (row) => row.created,
        sortable: true,
        hide: "md",
    },
    {
        name: "Action",
        cell: (row) => <ManageButton row={row} />,
        right: true,
        grow: 2,
        minWidth: "110px",
    },
];

const data = [
    {
        id: 1,
        name: "Beetlejuice",
        ip: "192.168.1.25",
        created: "28/06/2002 16:32:22 GMT",
        core: 2,
        ram: 128,
    },
];

export default function InstanceListHolder() {
    return (
        <div className={styles.holder}>
            <p className={styles.title}></p>
            <DataTable
                columns={columns}
                data={data}
                sortable
                title="Your instances"
                theme="solarized"
                pagination
                highlightOnHover
                responsive
            />
        </div>
    );
}
