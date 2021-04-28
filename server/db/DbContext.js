import ValueSchema from "../models/Value";
import CarSchema from "../models/Car"
import RecordSchema from "../models/Record"
import FoodItemSchema from "../models/FoodItem"
import mongoose, { mongo } from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema)
  Records = mongoose.model("Record", RecordSchema)

  FoodItems = mongoose.model("FoodItem", FoodItemSchema)
}

export const dbContext = new DbContext();
