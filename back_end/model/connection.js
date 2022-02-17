const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';
const MONGO_DB = 'task_list';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => MongoClient.connect(MONGO_URL, OPTIONS)
  .then((conn) => conn.db(MONGO_DB))
  .catch((err) => {
    console.log(err);
    process.exit();
  });

module.exports = connection;
