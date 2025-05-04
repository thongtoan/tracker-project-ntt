import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();

// General Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))


dotenv.config({ path: '../.env' });
// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.post('/api/auth/login', (req, res) => {

})

app.listen(process.env.PORT, () => {
    console.log(`App running at port: ${process.env.PORT}`);
})