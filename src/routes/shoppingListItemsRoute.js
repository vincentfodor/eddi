import express from 'express';

const Router = express.Router();

const shoppinglist = [
    {
        id: 1,
        title: 'Wocheneinkauf',
        date: '16.08.2019',
        items: [
            {
                id: 1,
                name: '1 Gut&Günstig Kaffee (Latte)',
                price: 0.49
            },
            {
                id: 2,
                name: '1kg Kartoffeln asd',
                price: 3.49
            }
        ]
    },
    {
        id: 2,
        title: 'Geburtstag',
        date: '17.08.2019',
        items: [
            {
                id: 1,
                name: '2 Captain Morgan',
                price: 19.98
            },
            {
                id: 2,
                name: '4 1,5L Coca Cola',
                price: 6.96
            }
        ]
    }
]

Router.get('/', (req, res, next) => {
    res.json(shoppinglist);
});

export default Router;