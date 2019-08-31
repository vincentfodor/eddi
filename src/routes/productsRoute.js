import express from 'express';

const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.json([
        {
            name: 'Milch'
        }
    ])
});

export default Router;