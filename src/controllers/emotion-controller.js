import { v4 as uuidv4 } from "uuid";
import { sendEmotionNotFoundError } from "../utils/send-error.js";

let emotions = []; // TODO: conectar con JSON de datos

export const getAllEmotions = (req, res) => {
  res.json(emotions);
};

export const getEmotionById = (req, res) => {
  const emotion = emotions.find((e) => e.id === req.params.id);
  if (!emotion) return sendEmotionNotFoundError(res);
  res.json(emotion);
};

export const createEmotion = (req, res) => {
  const { title, date, emotion, intensity, description, context } = req.body;
  const newEmotion = {
    id: uuidv4(),
    title,
    date,
    emotion,
    intensity,
    description,
    context,
    userId: req.user?.id || "anon", // TODO: conectar con servicio de autenticación
  };
  emotions.push(newEmotion);
  res.status(201).json(newEmotion);
};

export const updateEmotion = (req, res) => {
  const index = emotions.findIndex((e) => e.id === req.params.id);
  if (index === -1) return sendEmotionNotFoundError(res);
  emotions[index] = { ...emotions[index], ...req.body };
  res.json(emotions[index]);
};

export const deleteEmotion = (req, res) => {
  const index = emotions.findIndex((e) => e.id === req.params.id);
  if (index === -1) return sendEmotionNotFoundError(res);
  const deleted = emotions.splice(index, 1);
  res.json(deleted[0]);
};
