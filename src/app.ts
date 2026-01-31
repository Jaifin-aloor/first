import http from "http";
import express from 'express';
import type {Express, Request, Response} from 'express';
import cors from 'cors';
import { createNote } from "./createNote";
import { getAllNotes } from "./getAllNotes";
import { getSingleNote } from "./getSingleNote";
import { updateNote } from "./updateNote";
import { deleteNote } from "./deleteNote";
import { json } from "stream/consumers";


const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world from Express");
});

// ROUTES

const router = express.Router();


router.post("/notes", createNote);

router.get("/notes", getAllNotes);

router.get("/notes/:id", getSingleNote)

router.put("/notes/:id", updateNote)

router.delete("/notes/:id", deleteNote)



// adding router to express app
app.use(router);

http.createServer(app).listen(3000, () => {
    console.log("server is running on port 3000");
});