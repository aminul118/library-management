import express from "express";
import cors from "cors";
import router from "./app/routes";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "live-deploy-url"],
  })
);
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.json({
    message: "Library Server is running",
    success: true,
  });
});

export default app;
