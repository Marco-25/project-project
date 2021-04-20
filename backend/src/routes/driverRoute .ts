import { Router } from "express";
import DriverController from "../controllers/DriverController";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/drivers", DriverController.create)
    .get("/drivers", DriverController.getAll)
    .get("/drivers/:id", DriverController.getOne)
    .put("/drivers/:id", DriverController.update)
    .delete("/drivers/:id", DriverController.destroy)

export default router