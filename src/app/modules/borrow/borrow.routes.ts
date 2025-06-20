import { Router } from "express";
import borrowController from "./borrow.controller";

const borrowRouter = Router();

borrowRouter.post("/borrow", borrowController.createBorrow);

export default borrowRouter;
