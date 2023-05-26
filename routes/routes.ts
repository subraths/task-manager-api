import { Router } from "express";
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controller/controller";

const router: Router = Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
