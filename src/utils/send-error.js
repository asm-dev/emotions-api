export function sendError(res, statusCode, message) {
  return res.status(statusCode).json({ error: message });
}

export function sendEmotionNotFoundError(res) {
  return sendError(res, 404, "No se ha encontrado la emoción buscada");
}

export function sendInvalidCredentialsError(res) {
  return sendError(res, 401, "Credenciales inválidas");
}
