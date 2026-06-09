import mongoose from "mongoose";

const milkEntrySchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    shift: {
      type: String,
      enum: ["Morning", "Evening"],
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    rate: {
      type: Number,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const MilkEntry = mongoose.model("MilkEntry", milkEntrySchema);

export default MilkEntry;