import { Router } from "express";
import TrackerController from "../controllers/TrackerConstroller";
import auth from '../middlewares';

const router = Router()

router.use(auth)
router
    .post("/trackers", TrackerController.create)
    .get("/trackers", TrackerController.getAll)
    .get("/trackers/:id", TrackerController.getOne)
    .put("/trackers/:id", TrackerController.update)
    .delete("/trackers/:id", TrackerController.destroy);

export default router