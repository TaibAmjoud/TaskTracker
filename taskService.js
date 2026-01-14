const { loadTasks, saveTasks } = require('./fileService');
const { STATUS } = require('./constants');

function createTask(description) {
  if (!description) throw new Error('La description est obligatoire');

  const tasks = loadTasks();

  const task = {
    id: tasks.length + 1,
    description,
    status: STATUS.TODO,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(task);
  saveTasks(tasks);
  return task;
}

function listTasks(status) {
  const tasks = loadTasks();
  return status ? tasks.filter(t => t.status === status) : tasks;
}

function updateTask(id, description) {
  const tasks = loadTasks();
  const task = tasks.find(t => t.id === Number(id));
  if (!task) throw new Error('Tâche introuvable');

  task.description = description;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
}

function deleteTask(id) {
  const tasks = loadTasks();
  const index = tasks.findIndex(t => t.id === Number(id));
  if (index === -1) throw new Error('Tâche introuvable');

  tasks.splice(index, 1);
  saveTasks(tasks);
}

function updateTaskStatus(id, status) {
  const tasks = loadTasks();
  const task = tasks.find(t => t.id === Number(id));
  if (!task) throw new Error('Tâche introuvable');

  task.status = status;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
}

module.exports = {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
  updateTaskStatus
};
