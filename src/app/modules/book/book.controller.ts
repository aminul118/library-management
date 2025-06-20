import { Request, Response } from "express";
import Book from "./book.model";

const createBook = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Validation failed",
      error,
    });
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const data = await Book.find();
    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Book retrieved failed",
    });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = await Book.findById(bookId);
    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Book retrieved failed",
    });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const body = req.body;
    const data = await Book.findByIdAndUpdate(bookId, body);
    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Book updated failed",
    });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    await Book.findByIdAndDelete(bookId);

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Book deletion failed",
      error,
    });
  }
};

const bookController = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};

export default bookController;
