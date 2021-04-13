import { Router } from "express";
import ClientController from "../controllers/ClientController";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/clients", ClientController.create)
    // .get("/users", UserController.getAll)
    // .get("/users/:id", UserController.getOne)
    // .put("/users/:id", UserController.update)
    // .delete("/users/:id", UserController.destroy)

export default router