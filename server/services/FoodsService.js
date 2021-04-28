import { dbContext } from "../db/DbContext";


class FoodsService{
    editOneFoodItem(id, body) {
        return dbContext.FoodItems.findByIdAndUpdate(id, body)
    }
    deleteOne(id) {
        return dbContext.FoodItems.findByIdAndDelete(id)
    }
    find(query = {}) {
        return dbContext.FoodItems.find(query)
    }
    findById(id) {
        return dbContext.FoodItems.findById(id)
    }
    createFoodItem(body) {
        return dbContext.FoodItems.create(body)
    }
}

export const foodsService = new FoodsService()