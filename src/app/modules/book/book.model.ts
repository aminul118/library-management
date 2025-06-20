import { Schema, model, Model } from "mongoose";
import { IBook, BookInstanceMethods, BookModel } from "./book.interface";

const bookSchema = new Schema<IBook, BookModel, BookInstanceMethods>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
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
        message: "{VALUE} is not a valid genre",
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
      required: [true, "Copies are required"],
    },
    available: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

bookSchema.method("updateCopies", async function (quantity: number) {
  if (this.copies < quantity) {
    throw new Error("Not enough copies available");
  }
  this.copies -= quantity;
  if (this.copies === 0) {
    this.available = false;
  }
  await this.save();
});

const Book = model<IBook, BookModel>("Book", bookSchema);
export default Book;
