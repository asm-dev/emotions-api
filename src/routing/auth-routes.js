import express from "express";
import {
  createEmotion,
  deleteEmotion,
  getAllEmotions,
  getEmotionById,
  updateEmotion,
} from "../controllers/emotion-controller.js";
import { validateEmotion } from "../middlewares/validation-middleware.js";

const router = express.Router();

router.get("/", getAllEmotions);
router.get("/:id", getEmotionById);
router.post("/", validateEmotion, createEmotion);
router.put("/:id", validateEmotion, updateEmotion);
router.delete("/:id", deleteEmotion);

export default router;
