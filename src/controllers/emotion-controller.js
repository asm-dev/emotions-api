import { readData, writeData } from "../services/file-service.js";
import { createNewEmotion } from "../utils/create-new-emotion.js";
import { sendEmotionNotFoundError } from "../utils/send-error.js";

function findEmotionIndex(emotionData, id, res) {
  const index = emotionData.findIndex((e) => e.id === id);
  if (index === -1) {
    sendEmotionNotFoundError(res);
    return null;
  }
  return index;
}

function findEmotion(emotionData, id, res) {
  const emotion = emotionData.find((e) => e.id === id);
  if (!emotion) {
    sendEmotionNotFoundError(res);
    return null;
  }
  return emotion;
}

export const getAllemotionData = async (req, res) => {
  const emotionData = await readData();
  res.json(emotionData);
};

export const getEmotionById = async (req, res) => {
  const emotionData = await readData();
  const emotion = findEmotion(emotionData, req.params.id, res);
  if (!emotion) return;
  res.json(emotion);
};

export const createEmotion = async (req, res) => {
  const newEmotion = createNewEmotion({
    ...req.body,
    userId: req.user.id,
  });

  const emotionData = await readData();
  emotionData.push(newEmotion);
  await writeData(emotionData);
  res.status(201).json(newEmotion);
};

export const updateEmotion = async (req, res) => {
  const emotionData = await readData();
  const index = findEmotionIndex(emotionData, req.params.id, res);
  if (index === null) return;

  emotionData[index] = { ...emotionData[index], ...req.body };
  await writeData(emotionData);
  res.json(emotionData[index]);
};

export const deleteEmotion = async (req, res) => {
  const emotionData = await readData();
  const index = findEmotionIndex(emotionData, req.params.id, res);
  if (index === null) return;

  const deleted = emotionData.splice(index, 1);
  await writeData(emotionData);
  res.json(deleted[0]);
};
