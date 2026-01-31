import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { AlertsAPI } from "../api/alerts.api.js";
import AddAlertDialog from "./AddAlertDialog.jsx";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";



export default function AlertsTable() {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [visaType, setVisaType] = useState(null);
    const [status, setStatus] = useState(null);

    const [showAdd, setShowAdd] = useState(false);

    const fetchAlerts = async () => {
        setLoading(true);

        const res = await AlertsAPI.getAlerts({
            page,
            limit,
            visaType,
            status
        });

        setAlerts(res.data.data.docs);
        setTotalRecords(res.data.data.paginate.totalDocs);
        setLoading(false);
    };


    useEffect(() => {
        fetchAlerts();
    }, [page, limit, visaType, status]);


    const statusTemplate = (row) => (
        <Tag
            value={row.status}
            severity={
                row.status === "Active"
                    ? "success"
                    : row.status === "Booked"
                        ? "info"
                        : "danger"
            }
        />
    );

    const textEditor = (options) => (
        <InputText
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
        />
    );

    const visaTypeEditor = (options) => (
        <Dropdown
            value={options.value}
            options={["Tourist", "Business", "Student"]}
            onChange={(e) => options.editorCallback(e.value)}
        />
    );

    const statusEditor = (options) => (
        <Dropdown
            value={options.value}
            options={["Active", "Booked", "Expired"]}
            onChange={(e) => options.editorCallback(e.value)}
        />
    );


    const onRowEditComplete = async (e) => {
        const { newData } = e;

        await AlertsAPI.updateAlert(newData._id, {
            country: newData.country,
            city: newData.city,
            visaType: newData.visaType,
            status: newData.status
        });

        fetchAlerts();
    };


    const actionsTemplate = (row) => (
            <Button
                icon="pi pi-trash"
                severity="danger"
                size="small"
                onClick={() =>
                    AlertsAPI.deleteAlert(row._id).then(fetchAlerts)
                }
            />
    );

    return (
        <div className="card">
            <div className="flex justify-content-between mb-3">
                <h2>Visa Slot Alerts</h2>
                <Button label="Add Alert" icon="pi pi-plus" onClick={() => setShowAdd(true)} />
            </div>

            <div className="flex gap-3 mb-3">
                <Dropdown
                    value={visaType}
                    options={["Tourist", "Business", "Student"]}
                    placeholder="Visa Type"
                    showClear
                    onChange={(e) => {
                        setPage(1);
                        setVisaType(e.value);
                    }}
                />

                <Dropdown
                    value={status}
                    options={["Active", "Booked", "Expired"]}
                    placeholder="Status"
                    showClear
                    onChange={(e) => {
                        setPage(1);
                        setStatus(e.value);
                    }}
                />
            </div>


            <DataTable
                value={alerts}
                lazy
                editMode="row"
                dataKey="_id"
                paginator
                rows={limit}
                first={(page - 1) * limit}
                totalRecords={totalRecords}
                loading={loading}
                rowsPerPageOptions={[6, 12, 18]} 
                onPage={(e) => {
                    setPage(e.page + 1);
                    setLimit(e.rows);
                }}
                onRowEditComplete={onRowEditComplete}
            >

                <Column field="country" header="Country" editor={textEditor} />
                <Column field="city" header="City" editor={textEditor} />
                <Column
                    field="visaType"
                    header="Visa Type"
                    editor={visaTypeEditor}
                />
                <Column
                    field="status"
                    header="Status"
                    body={statusTemplate}
                    editor={statusEditor}
                />
                <Column
                    rowEditor
                    header="Update"
                    style={{ width: "10rem" }}
                    bodyClassName="flex align-items-center justify-content-start"
                />
                <Column
                    header="Actions"
                    body={actionsTemplate}
                    style={{ width: "10rem" }}
                />



            </DataTable>

            <AddAlertDialog
                visible={showAdd}
                onHide={() => setShowAdd(false)}
                onSuccess={fetchAlerts}
            />
        </div>
    );
}
