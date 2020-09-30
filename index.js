require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

const { getData } = require('./requests/get');
const { postData } = require('./requests/post');

app.use(bodyParser.json());

app.get('/', (req, res) => getData(req, res));
app.post('/', (req, res) => postData(req, res));

app.listen(port, () => console.log(`Proxy server listening on port ${port}`));
