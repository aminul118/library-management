import express from "express";
import cors from "cors";
import bookRouter from "./app/modules/book/book.routes";
import borrowRouter from "./app/modules/borrow/borrow.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Library Server is running",
    success: true,
  });
});

export default app;
