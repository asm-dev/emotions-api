import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Funciona el router" });
});

router.get("/fail", (req, res) => {
  throw new Error(
    "Forzamos un error para probar el middleware de manejo de errores"
  );
});

export default router;
