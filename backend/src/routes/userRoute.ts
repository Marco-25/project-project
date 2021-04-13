import { Router } from "express";
import UserController from "../controllers/UserController";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/users", UserController.create)
    .get("/users", UserController.getAll)
    .get("/users/:id", UserController.getOne)
    .put("/users/:id", UserController.update)
    .delete("/users/:id", UserController.destroy)

export default router