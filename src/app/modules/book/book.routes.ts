import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/books", BookController.createBook);
router.get("/books", BookController.getBooks);
router.get("/books/:bookId", BookController.getBookById);
router.patch("/books/:bookId", BookController.updateBook);
router.delete("/books/:bookId", BookController.deleteBook);

export default router;
