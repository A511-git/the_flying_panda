import { Router } from "express";
import {alerts} from "./alerts.js"
export const api = () => {
    const router = Router();

    router.get("/ping", (req, res) => {
        res.send("pong");
    })
    router.use("/alerts", alerts());


    return router;
};
