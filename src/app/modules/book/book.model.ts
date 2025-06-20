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
    genre: {
      type: String,
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
        message: "{value} is not supported",
      },
      uppercase: true,
    },
    isbn: {
      type: String,
      unique: true,
      required: [true, "ISBN is required"],
    },
    description: {
      type: String,
      default: "",
    },
    copies: {
      type: Number,
      min: 0,
      required: [true, "Copies required"],
    },
    available: {
      type: Boolean,
      required: [true, "Available is required"],
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
