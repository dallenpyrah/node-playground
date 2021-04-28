import { carsService } from "../services/CarsService";
import { recordsService } from "../services/RecordsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
    constructor(){
        super("api/cars")
        this.router
        .get("", this.getAllCars)
        .get("/:id", this.getOneCar)
        .get("/:id/records", this.getRecordsByCarId)
        .post("", this.createOneCar)
        .delete("/:id", this.deleteOneCar)
        .put("/:id", this.editOneCar)
    }

    async getRecordsByCarId(req, res, next){
        try {
            return res.send(await recordsService.find(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async getAllCars(req, res, next){
        try {
            return res.send(await carsService.find())       
        } catch (error) {
            next(error)
        }
    }

    async getOneCar(req, res, next){
        try {
            return res.send(await carsService.findById(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async createOneCar(req, res, next){
        try {
            return res.send(await carsService.createCar(req.body))
        } catch (error) {
            next(error)
        }
    }

    async deleteOneCar(req, res, next){
        try {
            return res.send(await carsService.deleteOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    
    async editOneCar(req, res, next){
        try {
            return res.send(await carsService.editOneCar(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }
}