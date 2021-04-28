import { Schema } from "mongoose";


const FoodItem = new Schema(
    {
        type: { type: String, required: true},
        price: { type: Number, required: true },
        calories: { type: Number, required: true },
        ingredients: { type: String, required: true }
    }, { timestamps: true, toJSON: { virtuals: true }}
)

export default FoodItem; 