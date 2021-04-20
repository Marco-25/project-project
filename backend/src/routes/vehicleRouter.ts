import { Router } from "express";
import VehicleController from "../controllers/VehicleController";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/vehicles", VehicleController.create)
    .get("/vehicles", VehicleController.getAll)
    .get("/vehicles/:id", VehicleController.getOne)
    .put("/vehicles/:id", VehicleController.update)
    .delete("/vehicles/:id", VehicleController.destroy)

export default router