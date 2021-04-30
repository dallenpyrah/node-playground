import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const Human = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    occupation: { type: String },
    lifeExpectancy: { type: Number, required: true },
    education: { type: String }
}, { timestamps: true, toJSON: { virtuals: true }});

export default Human;