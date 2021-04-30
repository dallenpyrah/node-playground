import { humansService } from "../services/HumansService";
import BaseController from "../utils/BaseController";


export class HumansController extends BaseController{
    constructor(){
        super("api/human")
        this.router
        .get("", this.getAllHumans)
        .get("/:id", this.getOneHuman)
        .post("", this.createOneHuman)
        .put("/:id", this.editOneHuman)
        .delete("/:id", this.deleteOneHuman)
    }

    async getAllHumans(req, res, next){
        try {
            return res.send(await humansService.find())
        } catch (error) {
            next(error)
        }
    }

    async getOneHuman(req, res, next){
        try {
            return res.send(await humansService.getOneHuman(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async createOneHuman(req, res, next){
        try {
            return res.send(await humansService.createOneHuman(req.body))
        } catch (error) {
            next(error)
        }
    }

    async deleteOneHuman(req, res, next){
        try {
            return res.send(await humansService.deleteOneHuman(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async editOneHuman(req, res, next){
        try {
            return res.send(await humansService.editOneHuman(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }
}