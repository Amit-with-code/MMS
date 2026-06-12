import MilkEntry from "../models/milkEntryModel.js";

// Create Milk Entry
export const createMilkEntry = async (req, res) => {
  try {
    const { quantity, rate } = req.body;

    const amount = quantity * rate;

    const milkEntry = await MilkEntry.create({
      ...req.body,
      amount,
    });

    res.status(201).json({
      success: true,
      milkEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Milk Entries
export const getAllMilkEntries = async (req, res) => {
  try {
    const milkEntries = await MilkEntry.find()
      .populate("customerId", "customerCode name mobile")
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: milkEntries.length,
      milkEntries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Milk Entry
export const getMilkEntryById = async (req, res) => {
  try {
    const milkEntry = await MilkEntry.findById(req.params.id)
      .populate("customerId", "customerCode name mobile");

    if (!milkEntry) {
      return res.status(404).json({
        success: false,
        message: "Milk entry not found",
      });
    }

    res.status(200).json({
      success: true,
      milkEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Milk Entry
export const updateMilkEntry = async (req, res) => {
  try {
    const milkEntry = await MilkEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!milkEntry) {
      return res.status(404).json({
        success: false,
        message: "Milk entry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Milk entry updated successfully",
      milkEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Milk Entry
export const deleteMilkEntry = async (req, res) => {
  try {
    const milkEntry = await MilkEntry.findById(req.params.id);

    if (!milkEntry) {
      return res.status(404).json({
        success: false,
        message: "Milk entry not found",
      });
    }

    await milkEntry.deleteOne();

    res.status(200).json({
      success: true,
      message: "Milk entry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};