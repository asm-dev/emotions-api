import fs from "fs/promises";
import path from "path";

const dataPath = path.resolve("data/emotions.json");

export async function getEmotionData() {
  try {
    const content = await fs.readFile(dataPath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    return [];
  }
}

export async function writeEmotionData(data) {
  try {
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error("Hubo un error al escribir los datos");
  }
}
