import express, { Express, Response, Request } from 'express'
import dotenv from 'dotenv'
import dataRoute from './routes/data'
import cors from 'cors'


const app: Express = express();
dotenv.config();
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/data', dataRoute)

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello World');
    res.send(process.env.AWS_BUCKET);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})