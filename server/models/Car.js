import { Schema } from "mongoose";

const Car = new Schema(
    {
        brand: { type: String, required: true },
        model: { type: String, required: true },
        topSpeed: { type: Number },
        color: { type: String, required: true },
        price: { type: Number, required: true }
    },{ timestamps: true, toJSON: { virtuals: true } }
)

export default Car;