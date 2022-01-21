const express = require('express');
const mongoose = require('mongoose');

const userData = require('./routes/userData');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Instagram clone listing API');
});

app.use('/api/userData', userData);
require('dotenv').config();

const port = process.env.PORT || 3000;
const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.rsidp.mongodb.net/instagramClone?retryWrites=true&w=majority`,
  )
  .then((result) => {
    app.listen(port, () => console.log(`server is running ${port}`));
  })
  .catch((error) => console.log(error));
