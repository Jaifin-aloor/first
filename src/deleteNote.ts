import { Request, Response } from "express";
import { notes } from "./noteStore";

export const deleteNote = (req: Request, res: Response) => {
    const { id } = req.params;

    const index = notes.findIndex((n) => n.id === id);

    if (index === -1){
        return res.status(404).json({error: "note not found"});
    }

    const deleted = notes.splice(index, 1)[0];

    return res.json(deleted);
};