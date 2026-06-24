import express from "express";
import {registerUser,loginUser,getProfile,getAllUsers,getUserById,updateUser,deactivateUser} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", authMiddleware, getProfile);

router.get("/users", authMiddleware, getAllUsers);

router.get("/users/:id", authMiddleware, getUserById);

router.put("/users/:id", authMiddleware, updateUser);

router.patch("/users/:id/deactivate", authMiddleware, deactivateUser);

export default router;