import { dbContext } from "../db/DbContext";


class HumansService {
    editOneHuman(id, body) {
        return dbContext.Humans.findByIdAndUpdate(id, body)
    }
    deleteOneHuman(id) {
        return dbContext.Humans.findByIdAndDelete(id)
    }
    createOneHuman(body) {
        return dbContext.Humans.create(body)
    }
    getOneHuman(id) {
        return dbContext.Humans.findById(id)
    }
    find(query = {}) {
        return dbContext.Humans.find(query)
    } 

}

export const humansService = new HumansService();