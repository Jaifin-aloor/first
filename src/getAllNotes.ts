import { Request, Response } from "express";
import { notes } from "./noteStore"

export const getAllNotes = (req: Request, res: Response) => {
    return res.json(notes)
};