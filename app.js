import express from "express";
import morgan from "morgan";
import tweetsRouter from './router/tweets.js'
import authrouter from './router/auth.js';
import { config } from './config.js';
import { db } from './db/database.js';


const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('/tweets', tweetsRouter);
app.use('/auth', authrouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

// DB 연결 테스트!
// db.getConnection().then(connection => console.log(connection));

app.listen(config.host.port);


