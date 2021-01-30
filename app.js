require('dotenv').config();
const {PORT} = process.env;
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

app.use(express.static('public'));
app.use(express.json());

// API routes
app.use(
    [
        require('./server/routes/url_route'),
    ]
);

// Page not found
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

// Error handling
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;