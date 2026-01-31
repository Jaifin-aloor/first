#  In-Memory Notes API
## CRUD notes stored in memory using REST endpoints - with Node.js, TypeScript and Express


This backend project focuses on backend fundamentals and request/response design - with no database or external infrastructure.

### Goals of this project: 
- learn Http request/response flow
- design clean REST routes
- implement full CRUD
- practice validation and status codes
- get familiar with TypeScript, Git and Thunder Client

### Tech stack:
- Node.js
- Express
- TypeScript
- Nodemon
- ts-node


### Project Structure
- app.ts -> route wiring + server bootstrap
- noteStore.ts -> in-memory data store
- createNote.ts -> POST handler
- getAllNotes.ts -> GET all handler
- getSingleNote.ts -> GET by id handler
- updateNote.ts -> PUT handler
- deleteNote.ts -> DELETE handler

### Data Model
```ts
Note {
  id: string
  title: string
  content: string
  createdAt: number
  updatedAt: number
}
```
### API Endpoints
- create note -> POST /notes
- get all notes -> GET /notes
- get single note -> GET /notes/:id
- update note -> PUT /notes/:id
- delete note -> DELETE /notes/:id
