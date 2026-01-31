import fs from "fs";
import path from "path";

const logDir = path.resolve("logs");
const logFile = path.join(logDir, "access.log");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

export const Logger = (req, res, next) => {
    const timestamp = new Date().toISOString();

    const logLine = `[${timestamp}] ${req.method} ${req.originalUrl}\n`;

    fs.appendFile(logFile, logLine, (err) => {
        if (err) {
            console.error("Failed to write log:", err.message);
        }
    });

    next();
};
