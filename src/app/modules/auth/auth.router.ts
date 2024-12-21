
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controller';
import { UserValidation } from '../user/user.validation';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

// User register Route
router.post(
    '/register',
    validateRequest(UserValidation.userValidationSchema),
    AuthControllers.registerUser,
);

// Login User Route
router.post(
    '/login', auth(),
    validateRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser,
);

export const AuthRoutes = router;