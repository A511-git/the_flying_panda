import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Message } from "primereact/message";
import { AlertsAPI } from "../api/alerts.api.js";

const visaTypes = ["Tourist", "Business", "Student"];
const statuses = ["Active", "Booked", "Expired"];

export default function AddAlertDialog({ visible, onHide, onSuccess }) {
    const [form, setForm] = useState({
        country: "",
        city: "",
        visaType: "",
        status: "Active",
    });

    const [errors, setErrors] = useState({});

    const submit = async () => {
        const errs = {};
        if (!form.country) errs.country = "Country required";
        if (!form.city) errs.city = "City required";
        if (!form.visaType) errs.visaType = "Visa type required";

        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }

        await AlertsAPI.createAlert(form);
        onHide();
        onSuccess();
    };

    return (
        <Dialog
            visible={visible}
            header="Add Visa Alert"
            modal
            style={{ width: "35rem" }}
            onHide={onHide}
        >
            <div className="flex flex-column gap-3">
                <div>
                    <InputText
                        placeholder="Country"
                        value={form.country}
                        className={errors.country && "p-invalid"}
                        onChange={(e) =>
                            setForm({ ...form, country: e.target.value })
                        }
                    />
                    {errors.country && <Message severity="error" text={errors.country} />}
                </div>

                <div>
                    <InputText
                        placeholder="City"
                        value={form.city}
                        className={errors.city && "p-invalid"}
                        onChange={(e) =>
                            setForm({ ...form, city: e.target.value })
                        }
                    />
                    {errors.city && <Message severity="error" text={errors.city} />}
                </div>

                <div>
                    <Dropdown
                        value={form.visaType}
                        options={visaTypes}
                        placeholder="Visa Type"
                        className={errors.visaType && "p-invalid"}
                        onChange={(e) =>
                            setForm({ ...form, visaType: e.value })
                        }
                    />
                    {errors.visaType && (
                        <Message severity="error" text={errors.visaType} />
                    )}
                </div>

                <Dropdown
                    value={form.status}
                    options={statuses}
                    onChange={(e) =>
                        setForm({ ...form, status: e.value })
                    }
                />

                <Button label="Create Alert" onClick={submit} />
            </div>
        </Dialog>
    );
}
