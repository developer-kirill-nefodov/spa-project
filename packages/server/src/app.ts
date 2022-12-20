import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import {graphqlHTTP} from 'express-graphql';

import {logger} from './errorHandlers/logger'
import {schema} from "./schema";
import {root} from "./db";
import {readDb} from "./db/workDB";
import {Routers} from "./routers";

const createServer = async () => {
  const app = express();
  const port = Number(process.env.PORT || 4000);
  const host = process.env.HOST || 'localhost';

  app.use(cors({credentials: true, origin: process.env.FRONT_URL}));

  app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root
  }));

  app.use('/rest-api', Routers());

  app.listen(port, host, () => {
    logger.emit('successfully', `server started on port ${port}`);
    readDb();
  }).on("error", (e) => {
    logger.emit('error', e);
    process.exit(1);

    process.once("SIGUSR2", () => {
      process.kill(process.pid, "SIGUSR2");
    });
    process.on("SIGINT", () => {
      process.kill(process.pid, "SIGINT");
    });
  });
};

createServer()
  .then(() => logger.emit('info', 'server working'))
  .catch(() => logger.emit('error', 'server error'))
