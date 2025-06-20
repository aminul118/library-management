import Borrow from "./borrow.model";
import Book from "../book/book.model";
import { IBorrow } from "./borrow.interface";
import { Types } from "mongoose";

const createBorrow = async (payload: IBorrow) => {
  const { book, quantity, dueDate } = payload;

  const existingBook = await Book.findById(book);
  if (!existingBook) {
    throw new Error("Book not found");
  }

  if (existingBook.copies < quantity) {
    throw new Error("Not enough copies available");
  }

  existingBook.copies -= quantity;

  if (existingBook.copies === 0) {
    existingBook.available = false;
  }

  await existingBook.save();

  const borrowRecord = await Borrow.create({
    book: new Types.ObjectId(book),
    quantity,
    dueDate,
  });

  return borrowRecord;
};

const borrowServices = {
  createBorrow,
};

export default borrowServices;
