// POST    /api/payments
// GET     /api/payments
// GET     /api/payments/:id
// PUT     /api/payments/:id
// DELETE  /api/payments/:id

import express from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} from "../controllers/paymentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Customer
router.post("/api/payments", authMiddleware ,createPayment);

// Get All Customers
router.get("/", authMiddleware , getAllPayments);

// Get Single Customer
router.get("/:id", authMiddleware , getCustomerById);

// Update Customer
router.put("/:id", authMiddleware , updateCustomer);

// Delete Customer
router.delete("/:id", authMiddleware , deleteCustomer);

export default router;