const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 5000;

global.jwtKey = "secret";
global.jwtExpires = 24 * 60 * 60 * 1000;

mongoose.connect('mongodb://admin:password@localhost:27017/instagram?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


const userRouter = require('./routes/UserRoutes');
const loginRouter = require('./routes/LoginRoutes');
const storyRouter = require('./routes/StoryRoutes');

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
app.use('/', storyRouter);

app.listen(PORT, 
    () => console.log(`Server is listening on port ${PORT}`)
);

