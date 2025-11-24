import express from "express";
import { getCoffees } from "../controllers/coffee.controller.js";
import { protect } from "../middleware/protectrule.js";

const router = express.Router();

router.route("/")
    .get(protect, getCoffees);

export default router