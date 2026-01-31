import { Request, Response } from "express";
import { notes } from "./noteStore"

export const updateNote = (req: Request, res: Response) => {
    const { id } = req.params;
    const {title, content} = req.body;

    if ( title !== undefined && typeof title !== "string") {
        return res.status(400).json({"error": "title should be a string."});
    }

    if ( content !== undefined && typeof content !== "string") {
        return res.status(400).json({"error": "content should be a string."});
    }

    const note = notes.find((n) => n.id === id);

    if (!note) {
        return res.status(404).json({"error": "note not found."})
    }

    if ( title !== undefined ) note.title = title;
    if ( content !== undefined ) note.content = content;
    note.updatedAt = Date.now();

    return res.status(200).json(note)
}