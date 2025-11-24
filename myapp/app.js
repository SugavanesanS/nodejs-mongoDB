// app.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routers/user.routes.js";
import cors from "cors";
import authroutes from "./routers/auth.routes.js";
import listdataRoutes from "./routers/list.routes.js";
import coffeedataRoutes from "./routers/coffee.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API routes
app.use("/api", authroutes);
app.use("/api/users", userRoutes);
app.use("/api/listdata", listdataRoutes);
app.use("/api/coffees", coffeedataRoutes);

export default app;
