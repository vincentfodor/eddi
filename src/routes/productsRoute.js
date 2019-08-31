import express from 'express';

const Router = express.Router();

const products = [
    {
        id: 1,
        name: '1L Milch',
        price: 0.69
    },
    {
        id: 2,
        name: '1kg Kartoffeln'
    },
    {
        id: 3,
        name: '1,5kg Kartoffeln'
    },
    {
        id: 4,
        name: '2kg Kartoffeln'
    },
    {
        id: 5,
        name: '1x Gurke'
    },
    {
        id: 6,
        name: '1x Gut&Günstig Kaffee'
    },
];

Router.get('/', (req, res, next) => {
    const selectedProducts = products.filter(product => product.name.indexOf(req.query.search) > -1);
    res.json({
        products: selectedProducts.slice(0, 5)
    })
});

export default Router;