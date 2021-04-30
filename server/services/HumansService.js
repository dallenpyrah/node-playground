import { dbContext } from "../db/DbContext";


class HumansService {
    editOneHuman(id, body) {
        throw new Error("Method not implemented.");
    }
    deleteOneHuman(id) {
        throw new Error("Method not implemented.");
    }
    createOneHuman(body) {
        throw new Error("Method not implemented.");
    }
    getOneHuman(id) {
        throw new Error("Method not implemented.");
    }
    getAllHumans(query = {}) {
        return dbContext
    } 

}

export const humansService = new HumansService();