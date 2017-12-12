'use strict';

// 3rd-party dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbSetup = require('./db-setup');

// Application config
const LOCAL_APP_PORT = 8080;
const PUBLIC_APP_PORT = process.env.PUBLIC_APP_PORT || LOCAL_APP_PORT;
global.dbType = process.env.DB_TYPE;

// Sanity check for debugging
console.log("local app port:", LOCAL_APP_PORT);
console.log("public app port:", PUBLIC_APP_PORT);
console.log("db type:", global.dbType);

// Database setup for either MongoDB or Postgres
dbSetup(global.dbType);

// Express middleware
app.use(bodyParser.json()); // for parsing application/json

// Import routes
// const index = require('./routes/index');
console.log('numero 1')


/**
 *  ROUTING FOR POSTGRESQL , If using POSTGRESQL uncomment these lines and comment
 *  ROUTING for MONGODB
 */
const owner = require('./routes/owner');
const shop = require('./routes/shop');
const product = require('./routes/product');

/**
 * ROUTING FOR MONGODB
  */

// const owner = require('./routes/mongodb/owner');
// const shop = require('./routes/mongodb/shop');
// const product = require('./routes/mongodb/product');


app.get('/', (req,res)=> {
  res.send('Hello');
    }
)

// Set up express routes
app.use('/owner', owner);
app.use('/shop', shop);
app.use('/product', product);

app.listen(LOCAL_APP_PORT, () => {
  console.log('App started ...');
});
