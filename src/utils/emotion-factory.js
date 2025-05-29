export function createNewEmotion({
  title,
  date,
  emotion,
  intensity,
  description,
  context,
  userId,
}) {
  return {
    id: uuidv4(),
    title,
    date,
    emotion,
    intensity,
    description,
    context,
    userId,
  };
}
