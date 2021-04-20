import { Router } from "express";
import HistoricController from "../controllers/HistoricContronller";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/historic", HistoricController.create)
    .get("/historic", HistoricController.getAll)

export default router