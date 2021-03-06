const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');

mongoose.set('useFindAndModify', false);

const mongoSanitize = require('mongo-sanitize');

const loadTestData = require('./testData');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // false?
app.use(express.json());
app.use('/api', postRoutes);
app.use((req, res, next) => {
  mongoSanitize(req.body);
  next();
});

// mongoDB - connect backend code with db
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  loadTestData();
});
db.on('error', err => console.log('Error ' + err));

app.listen(config.PORT, function() {
  console.log('Server is running on port:', config.PORT);
});

/// DUMMY ENDPOINT

app.post('/login', function(req, res) {
  User.findOne({ email: req.body.email, password: req.body.password }, function(err, data) {
    if (err) {
      res.send(err);
    } else if (data) {
      res.send('User Login Successful');
    } else {
      res.send('Wrong Username Password Combination');
    }
  });
});
