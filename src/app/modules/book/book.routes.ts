import { Router } from "express";
import bookController from "./book.controller";

const bookROuter = Router();

bookROuter.post("/books", bookController.createBook);
bookROuter.get("/books", bookController.getBooks);
bookROuter.get("/books/:bookId", bookController.getBookById);

export default bookROuter;
