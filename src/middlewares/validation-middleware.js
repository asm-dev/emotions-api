import Joi from "joi";

const emotionSchema = Joi.object({
  title: Joi.string().min(3).required(),
  date: Joi.date().iso().required(),
  emotion: Joi.string().required(),
  intensity: Joi.number().min(1).max(10).required(),
  description: Joi.string().optional(),
  context: Joi.string().optional(),
});

export function validateEmotion(req, res, next) {
  const { error } = emotionSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}
