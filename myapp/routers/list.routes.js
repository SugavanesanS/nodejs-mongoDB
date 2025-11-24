import express from "express";
import { protect } from "../middleware/protectrule.js";
import { getListData } from "../controllers/listdata.controller.js";

const router = express.Router()

router.route("/")
    .get(protect, getListData)

export default router
