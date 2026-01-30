import { Request, Response } from "express";
import { notes } from "./noteStore"

export const getSingleNote = (req: Request, res: Response) => {
    const { id } = req.params;
    const note = notes.find((n) => n.id === id);

    if (!note){
        return res.status(404).json({"error": "note not found"})
    }

    return res.json(note)
}