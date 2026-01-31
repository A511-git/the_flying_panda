import dotEnv from "dotenv"


dotEnv.config()

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URI;
export const FRONTEND_URL = process.env.FRONTEND_URL;