/* Configs */
require('dotenv').config();
require('express-async-errors');

/* Express */
const express = require('express');
const app = express();

/* Imports */

/* Middleware */

/* Routes */
app.get('/', (req, res)=>{
  res.send('Hello, E-Commerce API');
})

/* Server setup */
const port = process.env.PORT || 5000;

const start = async() => {
  try {
    app.listen(port, ()=>{
      console.log(`Server is listening on port ${port}...`);
    })
  } 
  catch (error) {
    console.log(error);
  }
}

start();