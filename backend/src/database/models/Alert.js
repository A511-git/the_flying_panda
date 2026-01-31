import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const AlertSchema = new mongoose.Schema(
    {
        country: {
            type: String,
            required: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        visaType: {
            type: String,
            enum: ["Tourist", "Business", "Student"],
            required: true,
        },
        status: {
            type: String,
            enum: ["Active", "Booked", "Expired"],
            default: "Active",
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
    }
);

AlertSchema.plugin(mongoosePaginate);
AlertSchema.index({ visaType: 1, status: 1 });
AlertSchema.index({ status: 1 });


export const AlertModel = mongoose.model("Alert", AlertSchema);