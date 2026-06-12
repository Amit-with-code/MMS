// importing the requierments

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import customerRoutes from "./routers/customerRoutes.js";
import milkEntryRoutes from "./routers/milkEntryRoutes.js";
import userRoutes from "./routers/userRoutes.js";


// improtent functions

dotenv.config();
const app = express();
connectDB();

// middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// server part
const PORT = process.env.PORT || 5000;

app.use("/api/user", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/milkentries", milkEntryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});