const Tasks = require('../model/Tasks');

const getAllTasks = async () => {
  try {
    const tasks = await Tasks.getAllTasks();

    return tasks;
  } catch (err) {
    return console.log(`erro no Service || ${err.message}`);
  }
};

module.exports = {
  getAllTasks,
};
