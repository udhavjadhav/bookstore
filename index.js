const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define book model and schema
const Book = require('./models/book');

// Set up routes
app.use('/api/books', require('./routes/books'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
