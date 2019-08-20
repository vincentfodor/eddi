import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import config from './config/server';

import getShoppingListItemsRoute from './routes/getShoppingListItems';

const app = express();

app.use(bodyParser.json());

app.use(cors(config.corsOptions));

app.get('/getShoppingListItems', getShoppingListItemsRoute);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});