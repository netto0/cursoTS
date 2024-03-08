//ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// Routes
import router from "./router";

// Logger
import Logger from "../config/logger";

//Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

// App port
const port = config.get<number>("port");

// DB
import db from "../config/db";

app.use(morganMiddleware)
app.use("/api/", router);

app.listen(3000, async () => {
  await db();
  Logger.info(`A aplicação está funcionando na porta ${port}`);
});
