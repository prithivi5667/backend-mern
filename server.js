require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const passport = require('passport');

const users = require('./routes/api/users');
const Post=require('./routes/api/Transaction')
const Msg=require('./routes/api/Msg')
// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());
// Importing passport file into server
require('./config/passport')(passport);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Smile, you are being watch by the Backend Team' });
});

app.use('/api/users', users);
app.use('/api/msg', Msg);
app.use("/api/post",Post)
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});