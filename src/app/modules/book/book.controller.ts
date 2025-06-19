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
      message: "Book created failed",
    });
  }
};

const bookController = {
  createBook,
};

export default bookController;
