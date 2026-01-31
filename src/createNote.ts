import { Request, Response } from "express";
import { randomUUID } from "crypto";
import { notes, Note } from "./noteStore"

export const createNote = (req: Request, res: Response) => {
    const {title, content} = req.body;

    if (typeof title!=="string" || typeof content!=="string") {
        return res.status(400).json({error: "title and content is required."})
    }

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