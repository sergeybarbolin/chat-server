import express, { Request, Response } from "express";
import mongoose from 'mongoose';


const app = express();

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
app.listen(3030, () => {
    console.log('Example app listening on port 3030!');
});