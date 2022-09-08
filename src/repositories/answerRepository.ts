import { createAnswerData } from "../services/answerService";
import { prisma } from "./../config/database";

export async function insertAnswer(data: createAnswerData) {
  return prisma.answer.create({ data });
}
export async function getAnswersByQuestionId(questionId: number) {
  return prisma.answer.findMany({ where: { questionId } });
}
