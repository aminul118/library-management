import Book from "./book.model";
import { IBook } from "./book.interface";

const createBook = async (payload: IBook) => {
  const newBook = new Book(payload);
  return await newBook.save();
};

const getBooks = async () => {
  return await Book.find();
};

const getBookById = async (id: string) => {
  return await Book.findById(id);
};

const updateBook = async (id: string, payload: Partial<IBook>) => {
  return await Book.findByIdAndUpdate(id, payload, { new: true });
};

const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};

export const BookService = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
