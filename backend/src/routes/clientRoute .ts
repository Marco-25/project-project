import { Router } from "express";
import ClientController from "../controllers/ClientController";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/clients", ClientController.create)
    .get("/clients", ClientController.getAll)
    .get("/clients/:id", ClientController.getOne)
    .put("/clients/:id", ClientController.update)
    .delete("/clients/:id", ClientController.destroy)

export default router