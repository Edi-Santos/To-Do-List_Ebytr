const { ObjectId } = require('mongodb');
const errorMessages = require('./messages/postTasksMessages');
const connection = require('../model/connection');

// Funções de apoio para consultas no banco de dados
// ===
const findTaskById = async (id) => {
  const db = await connection();
  const task = await db.collection('Tasks').findOne({ _id: new ObjectId(id) });

  return task;
};
// ===

const deleteValidate = async (id) => {
  const task = await findTaskById(id);
  
  console.log(task);
  
  if (task === null) return errorMessages.taskNotExists;

  return true;
};

const deleteTasksValidation = async (id) => {
  const validatingDelete = await deleteValidate(id);

  if (validatingDelete !== true) return validatingDelete;

  return true;
};

module.exports = deleteTasksValidation;
