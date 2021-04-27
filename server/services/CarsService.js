import { dbContext } from "../db/DbContext";

class CarsService{
    editOneCar(id, body) {
        return dbContext.Cars.findByIdAndUpdate(id, body)
    }
    deleteOne(id) {
        return dbContext.Cars.deleteOne(id)
    }
    createCar(body) {
        return dbContext.Cars.create(body)
    }
    findById(id) {
        return dbContext.Cars.findById(id)
    }
    find(query = {}) {
        return dbContext.Cars.find(query)
    }

}

export const carsService = new CarsService();