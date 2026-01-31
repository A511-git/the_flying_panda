import cors from "cors"
import cookieParser from "cookie-parser";
import express from "express";
import { ErrorHandler } from "./utils/error-handler.js"
import { api } from "./api/index.js"
import { FRONTEND_URL } from "./config/index.js"
import { Logger } from "./api/middlewares/index.js";


export const expressApp = (app) => {

    app.use(express.json({ limit: '1mb' }));
    app.use(express.urlencoded({ extended: true, limit: '1mb' }));
    app.use(cors({
        origin: [
            FRONTEND_URL,              
            "http://localhost:5173",   
            "http://127.0.0.1:5173"    
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Credentials"]
    }));
    app.use(express.static("public"));
    app.use(cookieParser());

    app.use(Logger)
    app.use("/api/v1", api())

    app.use(ErrorHandler);
}



