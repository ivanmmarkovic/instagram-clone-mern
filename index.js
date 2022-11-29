const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://admin:password@localhost:27017/articles?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res, next) => {
    res.json({message: 'Hello world'});
});


app.listen(PORT, 
    () => console.log(`Server is listening on port ${PORT}`)
);

