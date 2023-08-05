const express = require('express');
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/taskapi');
const authRoute = require('./routes/authentication');
const db = require('./db');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use('/taskapi',Router);
app.use('/authentication',authRoute);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});