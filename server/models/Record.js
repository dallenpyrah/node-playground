import { Schema } from "mongoose";
import mongoose from "mongoose"
const ObjectId = mongoose.SchemaTypes.ObjectId

const Record = new Schema(
    {
        carId: { type: ObjectId, ref: 'Car', required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        dateOfService: { type: String, required: true }
    }, { timestamps: true, toJSON: { virtuals: true }}
)

export default Record