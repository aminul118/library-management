import { Request, Response } from "express";
import Borrow from "./borrow.model";
import Book from "../book/book.model";

const createBorrow = async (req: Request, res: Response) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;
    const book = await Book.findById(bookId);
    console.log(book);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Invalid book ID",
        data: null,
      });
    }

    if (book.copies < quantity) {
      return res.status(400).json({
        success: false,
        message: "Not enough copies available",
      });
    }

    // Deduct copies
    book.copies -= quantity;

    // Optional: update available flag here if you have such logic
    if (book.copies === 0) {
      book.available = false;
    }

    await book.save();

    // Save borrow record
    const borrowRecord = await Borrow.create({
      book: book._id,
      quantity,
      dueDate,
    });

    return res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrowRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Validation failed",
      error,
    });
  }
};

const borrowController = {
  createBorrow,
};

export default borrowController;
