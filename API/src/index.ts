import "reflect-metadata";
import { createConnection } from 'typeorm'
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
import * as cors from 'cors';





const app = express()
app.use(async (req, res, next) => {
    app.use(cors);
    next();
})
createConnection()

app.use(bodyParser.json())
app.use(routes)
app.listen(3333)