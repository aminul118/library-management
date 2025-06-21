import { Router } from "express";
import borrowRouter from "../modules/borrow/borrow.routes";
import bookRouter from "../modules/book/book.routes";

const router = Router();

router.use("/api", bookRouter);
router.use("/api", borrowRouter);

export default router;
