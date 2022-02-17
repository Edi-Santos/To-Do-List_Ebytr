const Tasks = require('../model/Tasks');
const postTasksValidation = require('../validations/postTasksValidation');

const getAllTasks = async () => {
  try {
    const tasks = await Tasks.getAllTasks();

    return tasks;
  } catch (err) {
    return console.log(`erro no Service || ${err.message}`);
  }
};

const addNewTask = async (taskData) => {
  try {
    const validation = postTasksValidation(taskData);
    console.log(validation);

    if (validation !== true) return validation;

    const newTask = await Tasks.addNewTask(taskData);

    return newTask;
  } catch (err) {
    return console.log(`erro no Service || ${err.message}`);
  }
};

module.exports = {
  getAllTasks,
  addNewTask,
};
