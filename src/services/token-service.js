import jwt from "jsonwebtoken";

export function generateToken(user) {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: "1h",
  });
}

export function verifyToken(token) {
  const secret = process.env.JWT_SECRET;
  return jwt.verify(token, secret);
}
