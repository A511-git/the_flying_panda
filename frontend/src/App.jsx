import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AlertsTable from "./pages/AlertsTable";

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core 
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/alerts" replace />} />
                <Route path="/alerts" element={<AlertsTable />} />
            </Routes>
        </BrowserRouter>
    );
}
