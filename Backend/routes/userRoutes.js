import express from 'express';
import { protect, admin } from '../Middleware/authMiddleware.js';

import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUserById,
  getUserById,
  updateUserById,
} from '../Controller/userController.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getAllUsers);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUserById)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserById);

export default router;
