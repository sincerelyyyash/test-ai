import { Request, Response, NextFunction } from 'express';
import dbConnect from "../lib/dbConnect";
import User from "../models/user.model";
import { asyncHandler } from "../lib/asyncHandler";
import { ApiError } from "../lib/apiError";
import { ApiResponse } from "../lib/apiResponse";

export const getUserDetails = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError({ statusCode: 400, message: "User ID is required" });
  }

  await dbConnect();

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError({ statusCode: 404, message: "User not found" });
  }

  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "User details retrieved successfully",
    data: JSON.parse(JSON.stringify(user)),
  }));
});

export const pingServer = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "Server is alive",
    data: "Server is alive",
  }));
});
