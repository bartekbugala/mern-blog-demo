const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({ extended: true })); // false?
app.use(express.json());
app.use('/api', postRoutes);

// mongoDB - connect backend code with db
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('Connected to database'));
db.on('error', err => console.log('Error ' + err));

app.listen(config.PORT, function() {
  console.log('Server is running on port:', config.PORT);
});
