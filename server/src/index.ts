import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { connectToDatabase } from './database';
import { schema } from './schema';
import { root } from './resolvers';

dotenv.config();

const app = express();
const port = process.env.APPLICATION_PORT;

app.use(cors({ origin: String(process.env.CLIENT_URL) }));
app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);

const startServer = () => {
  app.listen(port, () => {
    console.info(`App listening on port ${port}`);
  });
};

const start = async () => {
  await connectToDatabase();
  startServer();
};

start();
