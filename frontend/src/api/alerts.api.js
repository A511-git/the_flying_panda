import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/v1/alerts`,
});

export const AlertsAPI = {
    getAlerts: (params) => api.get("/", { params }),
    createAlert: (data) => api.post("/", data),
    updateAlert: (id, data) => api.put(`/${id}`, data),
    deleteAlert: (id) => api.delete(`/${id}`)
};
