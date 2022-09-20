/* Configs */
require('dotenv').config();
require('express-async-errors');

/* Express */
const express = require('express');
const app = express();

/* Imports */
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

/* Middleware */
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

/* Routes */
app.get('/', (req, res)=>{
  res.send('Hello, E-Commerce API');
})

app.get('/api/v1', (req, res)=>{
  console.log(req.signedCookies);
  res.send('Hello, E-Commerce API');
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

/* Error handlers */
app.use(notFound);
app.use(errorHandler);

/* Server setup */
const port = process.env.PORT || 5000;
const start = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, ()=>{
      console.log(`Server is listening on port ${port}...`);
    })
  } 
  catch (error) {
    console.log(error);
  }
}

start();