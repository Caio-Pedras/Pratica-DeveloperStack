// TODO
import { prisma } from "./../config/database";
import { createQuestionData } from "../services/questionService";

export async function insertQuestion(data: createQuestionData) {
  return prisma.question.create({ data });
}
export async function getQuestionById(id: number) {
  return prisma.question.findUnique({ where: { id } });
}
export async function getAllQuestions() {
  return prisma.question.findMany();
}
