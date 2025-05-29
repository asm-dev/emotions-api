import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../services/file-service.js";
import { sendEmotionNotFoundError } from "../utils/send-error.js";

export const getAllEmotions = async (req, res) => {
  const emotions = await readData();
  res.json(emotions);
};

export const getEmotionById = async (req, res) => {
  const emotions = await readData();
  const emotion = emotions.find((e) => e.id === req.params.id);
  if (!emotion) return sendEmotionNotFoundError(res);
  res.json(emotion);
};

export const createEmotion = async (req, res) => {
  const { title, date, emotion, intensity, description, context } = req.body;
  const newEmotion = {
    id: uuidv4(),
    title,
    date,
    emotion,
    intensity,
    description,
    context,
    userId: req.user?.id || "anon", //TODO: Implementar autenticación
  };
  const emotions = await readData();
  emotions.push(newEmotion);
  await writeData(emotions);
  res.status(201).json(newEmotion);
};

export const updateEmotion = async (req, res) => {
  const emotions = await readData();
  const index = emotions.findIndex((e) => e.id === req.params.id);
  if (index === -1) return sendEmotionNotFoundError(res);
  emotions[index] = { ...emotions[index], ...req.body };
  await writeData(emotions);
  res.json(emotions[index]);
};

export const deleteEmotion = async (req, res) => {
  const emotions = await readData();
  const index = emotions.findIndex((e) => e.id === req.params.id);
  if (index === -1) return sendEmotionNotFoundError(res);
  const deleted = emotions.splice(index, 1);
  await writeData(emotions);
  res.json(deleted[0]);
};
