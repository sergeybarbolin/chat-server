import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { UserController, DialogController } from './controllers';

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
const Dialog = new DialogController();

app.get('/users/:id', User.show);
app.post('/users/create', User.create);
app.delete('/users/:id', User.delete);

app.get('/dialogs/:id', Dialog.index);
app.post('/dialogs/create', Dialog.create);
app.delete('/dialogs/:id', Dialog.delete);

app.listen(3030, () => {
    console.log('Example app listening on port 3030!');
});