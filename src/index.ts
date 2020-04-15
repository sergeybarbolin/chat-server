import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { UserController } from './controllers';

const mongooseConfig = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.connect('mongodb://localhost:27017/chat', mongooseConfig);
const app = express();

app.use(bodyParser.json())

const User = new UserController();

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user/create', User.create);

app.listen(3030, () => {
    console.log('Example app listening on port 3030!');
});