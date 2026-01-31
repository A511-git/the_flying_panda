import { z } from "zod"

const BaseSchema = {
    id: z.string("Invalid id"),
    country: z.string("Invalid country").min(3, "Invalid country").max(120, "Invalid country").trim(),
    city: z.string("Invalid city").min(3, "Invalid city").max(500, "Invalid city").trim(),
    visaType: z.enum(["Tourist", "Business", "Student"], "Invalid visa type"),
    status: z.enum(["Active", "Booked", "Expired"], "Invalid status"),
};

export {BaseSchema}

