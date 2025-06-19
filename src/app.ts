import express from "express";
import cors from "cors";
import bookROuter from "./app/modules/book/book.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookROuter);

app.get("/", (req, res) => {
  res.json({
    message: "Library Server is running",
    success: true,
  });
});

export default app;
