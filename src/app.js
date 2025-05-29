import express from "express";
import errorHandler from "./middlewares/error-handler.js";
import emotionRoutes from "./routing/emotion-routes.js";

const app = express();

app.use(express.json());
app.use("/api/emotions", emotionRoutes);
app.use("/login", (req, res) => res.send("Login pendiente"));
app.use(errorHandler);

export default app;
