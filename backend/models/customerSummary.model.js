import mongoose from "mongoose";

const customerSummarySchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      unique: true,
      required: true,
    },

    totalMilkQuantity: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      default: 0,
    },

    totalPaid: {
      type: Number,
      default: 0,
    },

    pendingAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const CustomerSummary = mongoose.model(
  "CustomerSummary",
  customerSummarySchema
);

export default CustomerSummary;