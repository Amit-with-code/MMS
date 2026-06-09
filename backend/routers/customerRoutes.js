import express from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

// Create Customer
router.post("/", createCustomer);

// Get All Customers
router.get("/", getAllCustomers);

// Get Single Customer
router.get("/:id", getCustomerById);

// Update Customer
router.put("/:id", updateCustomer);

// Delete Customer
router.delete("/:id", deleteCustomer);

export default router;