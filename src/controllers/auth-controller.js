import fs from "fs/promises";
import path from "path";
import { generateToken } from "../services/token-service.js";
import { sendInvalidCredentialsError } from "../utils/send-error.js";

const usersPath = path.resolve("data/users.json");

export async function login(req, res) {
  const { username, password } = req.body;

  const content = await fs.readFile(usersPath, "utf-8");
  const users = JSON.parse(content);

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    sendInvalidCredentialsError(res);
  }

  const token = generateToken(user);
  res.json({ token });
}
