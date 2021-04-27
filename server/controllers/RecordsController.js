import { recordsService } from "../services/RecordsService";
import BaseController from "../utils/BaseController";

export class RecordsController extends BaseController{
    constructor(){
        super("api/records")
        this.router
        .get("", this.getAllRecords)
        .get("/:id", this.getOneRecord)
        .post("", this.createOneRecord)
        .delete("/:id", this.deleteOneRecord)
        .put("/:id", this.editOneRecord)
    }

    async getAllRecords(req, res, next){
            try {
                return res.send(await recordsService.find())
            } catch (error) {
                next(error)
            }
    }

    async getOneRecord(req, res, next){
        try {
            return res.send(await recordsService.findById(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async createOneRecord(req, res, next){
        try {
            return res.send(await recordsService.createOneRecord(req.body))
        } catch (error) {
            next(error)
        }
    }

    async deleteOneRecord(req, res, next){
        try {
            return res.send(await recordsService.deleteOneRecord(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async editOneRecord(req, res, next){
        try {
            return res.send(await recordsService.editOneRecord(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }


}