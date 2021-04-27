import { dbContext } from "../db/DbContext";

class RecordsService{
    editOneRecord(id, body) {
        return dbContext.Records.findByIdAndUpdate(id, body)
    }
    deleteOneRecord(id) {
        return dbContext.Records.findByIdAndDelete(id)
    }
    createOneRecord(body) {
        return dbContext.Records.create(body)
    }
    findById(id) {
        const record = dbContext.Records.findById(id)
        if(record == null){
            throw new Error("Record not found")
        }
        return record
    }
    find(query = {}) {
        return dbContext.Records.find(query)
    }

}

export const recordsService = new RecordsService()