const fs = require('fs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const auth = require('./middlewares/Auth');

const PORT = process.env.PORT || 5000;

global.jwtKey = "secret";
global.jwtExpires = 24 * 60 * 60 * 1000;

mongoose.connect('mongodb://admin:password@localhost:27017/instagram?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

try {
    fs.mkdirSync(`${__dirname}/public`, {mode: 0o777});
} catch (error) {
    console.log(error);
}

const userRouter = require('./routes/UserRoutes');
const loginRouter = require('./routes/LoginRoutes');
const postRouter = require('./routes/PostRoutes');

app.use(cors());
app.use(fileUpload());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res, next) => {
    res.json({message: 'Hello world'});
});


app.use('/', userRouter);
app.use('/', loginRouter);
app.use('/', auth, postRouter);

app.listen(PORT, 
    () => console.log(`Server is listening on port ${PORT}`)
);

