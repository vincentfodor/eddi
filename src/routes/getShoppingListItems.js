export default (req, res, next) => {
    const items = [
        {
            id: 1,
            name: 'Wocheneinkauf',
            items: [
                {
                    id: 1,
                    name: '1 Gut&Günstig Kaffee',
                    price: 0.49
                }
            ]
        }
    ]

    req.json(items);

    //! TODO:: Database setup & http JSON response
}