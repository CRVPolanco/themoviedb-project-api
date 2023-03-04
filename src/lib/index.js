const express = require('express');
const cors = require('cors');
const { api } = require('./api');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Connected successfully'));

api(app);

app.listen(8000, () => console.log("Port: 8000"));
