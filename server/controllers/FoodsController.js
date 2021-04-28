import { foodsService } from "../services/FoodsService";
import BaseController from "../utils/BaseController";

export class FoodsController extends BaseController{

    constructor(){
        super("api/food")
        this.router
        .get("", this.getAllFood)
    }

    async getAllFood(req, res, next){
        try {
            return res.send(await foodsService.find())
        } catch (error) {
            next(error)
        }
    }

    async createFoodItem(req, res, next){
        try {
            return res.send(await foodsService.createFoodItem(req.body))
        } catch (error) {
            next(error)
        }
    }

    async getOneFoodItem(req, res, next){
        try {
            return res.send(await foodsService.findById(req.params.id))            
        } catch (error) {
            next(error)
        }
    }

    async deleteOneFoodItem(req, res, next){
        try {
            return res.send(await foodsService.deleteOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async editOneFoodItem(req, res, next){
        try {
            return res.send(await foodsService.editOneFoodItem(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

}