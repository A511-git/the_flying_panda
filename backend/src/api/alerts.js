import { Router } from "express"
import { AlertService } from "../services/index.js"
import { AlertValidator } from "../validation/index.js"
import { ApiResponse } from "../utils/api-response.js"
import { AsyncHandler } from "../utils/async-handler.js"
import { json } from "zod"

export const alerts = () => {
    const router = Router()

    const alertService = new AlertService();
    const alertValidator = new AlertValidator();

    router.post("/", AsyncHandler(async (req, res) => {
        const data = alertValidator.create(req.body);
        const result = await alertService.create(data);

        res.status(201).json(new ApiResponse(201, result, "Alert created successfully"));
    }))

    router.get("/", AsyncHandler(async (req, res) => {
        const data = alertValidator.paginate(req.query);
        const result = await alertService.paginate(data);

        res.status(200).json(new ApiResponse(200, result, "Alerts fetched successfully"));
    }))

    router.put("/:id", AsyncHandler(async (req, res) => {
        const data = alertValidator.updateById({ id: req.params.id, data: req.body });
        const result = await alertService.updateById(data);

        res.status(200).json(new ApiResponse(200, result, "Alert updated successfully"));
    }))

    router.delete("/:id", AsyncHandler(async (req, res) => {
        const data = alertValidator.deleteById({ id: req.params.id });
        const result = await alertService.deleteById(data.id);

        res.status(200).json(new ApiResponse(200, result, "Alert deleted successfully"));
    }))


    return router;
}