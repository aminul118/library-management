import { Request, Response } from "express";
import borrowServices from "./borrow.service";

const createBorrow = async (req: Request, res: Response) => {
  try {
    const data = await borrowServices.createBorrow(req.body);

    return res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data,
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
