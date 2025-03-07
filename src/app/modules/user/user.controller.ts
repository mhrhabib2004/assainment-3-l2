
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";
import httpStatus from 'http-status';


// User Create Funtionality
const createUser = catchAsync(async (req, res) => {
  const { user } = req.body;

  const result = await UserServices.createUserIntoDB(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};