const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

global.jwtKey = "secret";
global.jwtExpires = 24 * 60 * 60 * 1000;

mongoose.connect('mongodb://admin:password@localhost:27017/instagram?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


const userRoutes = require('./routes/UserRoutes');
const loginRoutes = require('./routes/LoginRoutes');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res, next) => {
    res.json({message: 'Hello world'});
});


app.use('/', userRoutes);
app.use('/', loginRoutes);

app.listen(PORT, 
    () => console.log(`Server is listening on port ${PORT}`)
);

