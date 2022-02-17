const express = require('express');
const cors = require('cors');

const Task = require('./controller/Task');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/tasks', Task.getAllTasks);

app.listen(PORT, () => {
  console.log(`Servidor online na porta ${PORT}`);
});
