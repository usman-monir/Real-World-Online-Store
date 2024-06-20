import asyncHandler from "../Middleware/asyncHandler"
import User from "../models/userModel.js"

// @desc    Auth User and get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) =>{
    return res.send("Login user")
});

// @desc    Register User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) =>{
    return res.send("Register user")
});

// @desc    Logout User
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) =>{
    return res.send("Logout user")
});


// @desc    Get User Profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) =>{
    return res.send("Get user profile")
});

// @desc    Update User Profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) =>{
    return res.send("Update user profile")
});

// ?Admin Routes

// @desc    Get All Users
// @route   Get /api/users/
// @access  Private
const getAllUsers = asyncHandler(async (req, res) =>{
    return res.send("get all users")
});

// @desc    Get User By ID
// @route   Get /api/users/:id
// @access  Private
const getUserById = asyncHandler(async (req, res) =>{
    return res.send("get user by id")
});

// @desc    Update User By ID
// @route   PUT /api/users/:id
// @access  Private
const updateUserById = asyncHandler(async (req, res) =>{
    return res.send("update user by id")
});

// @desc    Delete User By ID
// @route   DELETE /api/users/:id
// @access  Private
const deleteUserById = asyncHandler(async (req, res) =>{
    return res.send("delete user by id")
});


export {  loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getAllUsers,
    deleteUserById,
    getUserById,
    updateUserById,
}
