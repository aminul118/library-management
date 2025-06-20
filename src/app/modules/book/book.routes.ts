import { Router } from "express";
import bookController from "./book.controller";

const bookRouter = Router();

bookRouter.post("/books", bookController.createBook);
bookRouter.get("/books", bookController.getBooks);
bookRouter.get("/books/:bookId", bookController.getBookById);
bookRouter.put("/books/:bookId", bookController.updateBook);
bookRouter.delete("/books/:bookId", bookController.deleteBook);

export default bookRouter;
