import { Request, Response } from "express";
import { randomUUID } from "crypto";

type Note = {
    id: string;
    title: string;
    content: string;
    createdAt: number;
    updatedAt: number;
}

let notes: Note[] = [];

export const createNote = (req: Request, res: Response) => {
    const {title, content} = req.body;

    const now = Date.now();

    const note: Note = {
        id: randomUUID(),
        title,
        content,
        createdAt: now,
        updatedAt: now
    };

    notes.push(note);
    
    return res.status(201).json(note);

};