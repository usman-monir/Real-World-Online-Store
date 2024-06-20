import express from 'express';

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

router.route('/').post(registerUser).get(getAllUsers);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile);
router
  .route('/:id')
  .delete(deleteUserById)
  .get(getUserById)
  .put(updateUserById);

export default router;
