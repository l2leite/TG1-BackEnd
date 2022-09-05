const express = require('express');
const routes = require('./routes');

require('./database')

const app = express();
const app1 = express();

app.use(express.json());
app.use(routes);

app1.use(express.json());
app1.use(routes);

app.listen(3334);
app1.listen(3335);