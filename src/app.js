import express from "express";
import { authMiddleware } from "./middlewares/auth-middleware.js";
import errorHandler from "./middlewares/error-handler.js";
import authRoutes from "./routing/auth-routes.js";
import emotionRoutes from "./routing/emotion-routes.js";

const app = express();
app.use(express.json());
app.use(loggerMiddleware);

app.use("/login", authRoutes);

app.use(
  "/api/emotions",
  (req, res, next) => {
    if (["POST", "PUT", "DELETE"].includes(req.method)) {
      return authMiddleware(req, res, next);
    }
    next();
  },
  emotionRoutes
);

app.use(errorHandler);

export default app;
