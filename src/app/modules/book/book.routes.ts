import { Router } from "express";
import bookController from "./book.controller";

const bookROuter = Router();

bookROuter.post("/books", bookController.createBook);

export default bookROuter;
