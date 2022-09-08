import { Request, Response } from "express";
import { createAnswerService } from "../services/answerService";
import {
  createQuestionService,
  getQuestionByIdService,
  getQuestionsService,
} from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;
  await createQuestionService(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const { id } = req.params;
  const answer = req.body;
  await createAnswerService({ ...answer, questionId: Number(id) });
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
  const questions = await getQuestionsService();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  // TODO
  const { id } = req.params;
  const result = await getQuestionByIdService(Number(id));
  res.status(200).send(result);
}
