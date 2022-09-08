// TODO
import { Question } from "@prisma/client";
import { getAnswersByQuestionId } from "../repositories/answerRepository";
import {
  getAllQuestions,
  getQuestionById,
  insertQuestion,
} from "../repositories/questionRepository";

export type createQuestionData = Omit<Question, "id">;

export async function createQuestionService(data: createQuestionData) {
  await insertQuestion(data);
  return;
}

export async function getQuestionsService() {
  const result = { questions: await getAllQuestions() };
  return result;
}

export async function getQuestionByIdService(id: number) {
  const question = await getQuestionById(id);
  const answers = await getAnswersByQuestionId(id);
  return { ...question, answers };
}
