const errorMessages = require('./messages/postTasksMessages');

const titleValidate = (title) => {
  if (!title || title === '') return errorMessages.titleNotExists;
  if (typeof title !== 'string') return errorMessages.titleMustBeString;

  return true;
};

const descriptionValidate = (description) => {
  if (!description || description === '') return errorMessages.descriptionNotExists;
  if (typeof description !== 'string') return errorMessages.descriptionMustBeString;

  return true;
};

const postTasksValidation = (taskData) => {
  const { title, description } = taskData;

  const validatingTitle = titleValidate(title);
  const validatingDescription = descriptionValidate(description);

  if (validatingTitle !== true) return validatingTitle;
  if (validatingDescription !== true) return validatingDescription;

  return true;
};

module.exports = postTasksValidation;
