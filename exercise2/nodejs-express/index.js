const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/pokefight', routes);

app.listen(3000, () => console.log('Go to http://localhost:3000/pokefight/'));
