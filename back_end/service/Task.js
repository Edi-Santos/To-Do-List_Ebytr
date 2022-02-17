const Tasks = require('../model/Tasks');
const postTasksValidation = require('../validations/postTasksValidation');
const existsTasksValidation = require('../validations/existsTasksValidation');

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

const deleteTask = async (id) => {
  try {
    const validating = await existsTasksValidation(id);

    if (validating !== true) return validating;
    const deletingTask = await Tasks.deleteTask(id);

    return deletingTask;
  } catch (err) {
    return console.log(`erro no Service || ${err.message}`);
  }
};

const updateTask = async (id, { title, description }) => {
  try {
    const validating = await existsTasksValidation(id);

    if (validating !== true) return validating;
    
    const updatingTask = Tasks.updateTask(id, { title, description });

    return updatingTask;
  } catch (err) {
    return console.log(`erro no Service || ${err.message}`);
  }
};

module.exports = {
  getAllTasks,
  addNewTask,
  deleteTask,
  updateTask,
};
