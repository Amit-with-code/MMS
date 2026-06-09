// importing the requierments

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import customerRoutes from "./routers/customerRoutes.js";

// improtent functions

dotenv.config();
const app = express();
connectDB();

// middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// server part
const PORT = process.env.PORT || 5000;

app.use("/api/customers", customerRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});