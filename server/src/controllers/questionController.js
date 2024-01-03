import asyncHandler from "../utils/AsyncHandler.js";
const userQuestion = asyncHandler(async (req, res) => {
  const { question } = req.body;
  const { id } = req.user;
  const newQuestion = new Question({
    question,
    user: id,
  });
  const createdQuestion = await newQuestion.save();
  res.status(201).json(createdQuestion);
});
const getAllQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find({}).populate("user", "name");
  res.json(questions);
});
const getQuestionById = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id).populate(
    "user",
    "name"
  );
  if (question) {
    res.json(question);
  } else {
    res.status(404);
    throw new Error("Question not found");
  }
});