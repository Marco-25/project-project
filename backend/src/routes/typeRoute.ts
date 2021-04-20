import { Router } from "express";
import TypesController from "../controllers/TypesController";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/types", TypesController.create)
    .get("/types", TypesController.getAll)

export default router