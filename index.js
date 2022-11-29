const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', async (req, res, next) => {
    res.json({message: 'Hello world'});
});



app.listen(PORT, 
    () => console.log(`Server is listening on port ${PORT}`)
);

