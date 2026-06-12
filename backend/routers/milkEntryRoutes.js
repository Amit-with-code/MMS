import express from "express";

import {
  createMilkEntry,
  getAllMilkEntries,
  getMilkEntryById,
  updateMilkEntry,
  deleteMilkEntry,
} from "../controllers/milkEntryController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Milk Entry
router.post("/", authMiddleware , createMilkEntry);

// Get All Milk Entries
router.get("/", authMiddleware , getAllMilkEntries);

// Get Single Milk Entry
router.get("/:id", authMiddleware , getMilkEntryById);

// Update Milk Entry
router.put("/:id", authMiddleware , updateMilkEntry);

// Delete Milk Entry
router.delete("/:id", authMiddleware , deleteMilkEntry);

export default router;