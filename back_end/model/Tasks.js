const connection = require('./connection');

const COLLECTION = 'Tasks';

const getAllTasks = async () => {
  try {
    const db = await connection();
    const tasks = await db.collection(COLLECTION).find().toArray();

    return tasks;
  } catch (err) {
    return console.log(`erro no Model || ${err.message}`);
  }
};

module.exports = {
  getAllTasks,
};
