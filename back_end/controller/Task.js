const Tasks = require('../service/Task');

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await Tasks.getAllTasks();

    return res.status(200).json(tasks);
  } catch (err) {
    console.log(`erro no Controller || ${err.message}`);
    return res.status(500).json({ message: 'Problemas internos' });
  }
};

const addNewTask = async (req, res) => {
  const taskData = req.body;

  try {
    const newTask = await Tasks.addNewTask(taskData);

    if (newTask.message) {
      const { status, message } = newTask;

      return res.status(status).json({ message });
    }

    return res.status(201).json(newTask);
  } catch (err) {
    console.log(`erro no Controller || ${err.message}`);
    return res.status(500).json({ message: 'Problemas internos' });
  }
};

module.exports = {
  getAllTasks,
  addNewTask,
};
