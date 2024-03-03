import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hey i am parth and i am a full stack web developer");
})
app.listen(4000, () => {
    console.log("http://localhost:4000")
});