require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

const { getData } = require('./requests/get');
const { postData } = require('./requests/post');
const { patchData } = require('./requests/patch');
const { deleteData } = require('./requests/delete');
const { putData } = require('./requests/put');
const { urlValidation } = require('./errors/urlValidation');
const { notFound } = require('./errors/notFound');

app.use(bodyParser.json());
app.use('/', (req, res, next) => {
  'url' in req.query ? urlValidation(req, res, next) : next();
});

app.get('/', (req, res) => getData(req, res));
app.post('/', (req, res) => postData(req, res));
app.patch('/', (req, res) => patchData(req, res));
app.delete('/', (req, res) => deleteData(req, res));
app.put('/', (req, res) => putData(req, res));

app.all('*', (req, res) => notFound(req, res));

app.listen(port, () => console.log(`Proxy server listening on port ${port}`));
