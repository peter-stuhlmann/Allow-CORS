require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const { getData } = require('./requests/get');

app.get('/', (req, res) => getData(req, res));

app.listen(port, () => console.log(`Proxy server listening on port ${port}`));
