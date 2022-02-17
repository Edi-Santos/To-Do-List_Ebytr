const { ObjectId } = require('mongodb');
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

const addNewTask = async (taskData) => {
  try {
    const db = await connection();
    const newTask = await db.collection(COLLECTION).insertOne(taskData);

    const taskAdded = {
      id: newTask.insertedId,
      title: taskData.title,
      description: taskData.description,
    };

    return taskAdded;
  } catch (err) {
    return console.log(`erro no Model || ${err.message}`);
  }
};

const deleteTask = async (id) => {
  try {
    const db = await connection();
    await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });

    return { message: 'Task deleted', status: 200 };
  } catch (err) {
    return console.log(`erro no Model || ${err.message}`);
  }
};

module.exports = {
  getAllTasks,
  addNewTask,
  deleteTask,
};
