import http from "http";
import express from 'express';
import type {Express, Request, Response} from 'express';
import cors from 'cors';
import { createNote } from "./createNote";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world from Express");
});

// class
type Note = {
    id: string;
    title: string;
    content: string;
    createdAt: number;
    updatedAt: number;
};

// Database Connection
let notes = [];

const now = Date.now;


// ROUTES

const router = express.Router();

router.get("/notes", (req: Request, res: Response) => {
    res.status(200).json([]);
})
router.get("/notes/:id", (req: Request, res: Response) => {
    res.status(200).json([]);
})
router.post("/notes", (req: Request, res: Response) => {
    res.status(200).json([]);
})
router.put("/notes/:id", (req: Request, res: Response) => {
    res.status(200).json([]);
})
router.delete("/notes/:id", (req: Request, res: Response) => {
    res.status(200).json([]);
})


// adding router to express app
app.use(router);

http.createServer(app).listen(3000, () => {
    console.log("server is running on port 3000");
});