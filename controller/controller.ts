import { Request, Response } from "express";
import Task from "../model/model";
import asyncWrapper from "../middleware/async";

// GET request
// returns all tasks
export const getTasks = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// POST request
// creates a Task
export const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// GET request
// returns single task
// takes :id parameter
export const getTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);
  res.status(200).json(task);
});

// PATCH request
// takes :id parameter
export const updateTask = asyncWrapper(async (req: Request, res: Response) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedTask) {
    return res.status(404).json({ message: `id ${req.params.id} not found` });
  }
  res.status(200).json(updatedTask);
});

// DELETE request
// takes :id parameter
export const deleteTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res
      .status(404)
      .json({ message: `id ${req.params.id} doesnot exist` });
  }
  res.status(200).json({ success: true });
});
