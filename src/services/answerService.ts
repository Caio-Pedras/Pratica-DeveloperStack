import { Answer } from "@prisma/client";
import { insertAnswer } from "../repositories/answerRepository";
import { getQuestionById } from "../repositories/questionRepository";

export type createAnswerData = Omit<Answer, "id">;

export async function createAnswerService(data: createAnswerData) {
  const question = await getQuestionById(data.questionId);
  if (!question) {
    throw { type: "not_found" };
  }

  await insertAnswer(data);
  return;
}
