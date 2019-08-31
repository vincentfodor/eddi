import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config/server';

import shoppingListItemsRoute from './routes/shoppingListItemsRoute';
import productsRoute from './routes/productsRoute';

const app = express();

app.use(bodyParser.json());

app.use(cors(config.corsOptions));

app.use('/shoppinglist', shoppingListItemsRoute);
app.use('/products', productsRoute);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});