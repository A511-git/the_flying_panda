import { z } from "zod";
import { BaseSchema } from "./base-schema.js"

export const AlertSchema = {
    create: z.object({
        country: BaseSchema.country,
        city: BaseSchema.city,
        visaType: BaseSchema.visaType,
        status: BaseSchema.status,
    }),
    updateById: z.object({
        id: BaseSchema.id,
        data: z.object({
            country: BaseSchema.country.optional(),
            city: BaseSchema.city.optional(),
            visaType: BaseSchema.visaType.optional(),
            status: BaseSchema.status.optional(),
        })
    }).refine(
        (val) => Object.keys(val.data).length > 0,
        {
            message: "At least one field must be provided for update",
            path: ["data"],
        }
    ),
    deleteById: z.object({
        id: BaseSchema.id,
    }),
    paginate: z.object({
        visaType: BaseSchema.visaType.optional(),
        status: BaseSchema.status.optional(),
        page: z.coerce.number().int().positive().optional(),
        limit: z.coerce.number().int().positive().optional(),
    })

} 