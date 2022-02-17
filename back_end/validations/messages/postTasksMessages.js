const titleNotExists = {
  message: 'Title can\'t to be empty',
  status: 400,
};

const titleMustBeString = {
  message: 'Title must be string',
  status: 400,
};

const descriptionNotExists = {
  message: 'Description can\'t to be empty',
  status: 400,
};

const descriptionMustBeString = {
  message: 'Description must be string',
  status: 400,
};

const taskNotExists = {
  message: 'Task not exists',
  status: 409,
};

module.exports = {
  titleNotExists,
  titleMustBeString,
  descriptionNotExists,
  descriptionMustBeString,
  taskNotExists,
};
