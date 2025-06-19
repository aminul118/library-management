import mongoose, { Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author  is required"],
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    copies: {
      type: Number,
      min: 0,
      required: [true, "Copies required"],
    },
    available: {
      type: Boolean,
      required: [true, "Available is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
