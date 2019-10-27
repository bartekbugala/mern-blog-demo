const dbUrl =
  process.env.dbPass && process.env.dbUser
    ? `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0-h1hep.mongodb.net/test?retryWrites=true&w=majority`
    : 'mongodb://localhost:27017/mernapp';

module.exports = {
  PORT: process.env.PORT || 8000,
  MONGO_URL: dbUrl
};
