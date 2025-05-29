import express from "express";
import {
  createEmotion,
  deleteEmotion,
  getAllEmotions,
  getEmotionById,
  updateEmotion,
} from "../controllers/emotion-controller.js";

const router = express.Router();

router.get("/", getAllEmotions);
router.get("/:id", getEmotionById);
router.post("/", createEmotion);
router.put("/:id", updateEmotion);
router.delete("/:id", deleteEmotion);

export default router;
