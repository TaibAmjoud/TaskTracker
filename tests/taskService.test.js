const fs = require('fs');
const path = require('path');
const { STATUS } = require('../constants');
const {
  createTask,
  listTasks,
  deleteTask,
  updateTask,
  updateTaskStatus
} = require('../taskService');

const TASK_FILE = path.join(__dirname, '../tasks.json');

beforeEach(() => {
  // Réinitialiser le fichier avant chaque test
  fs.writeFileSync(TASK_FILE, JSON.stringify([]));
});

test('ajoute une nouvelle tâche', () => {
  const task = createTask('Tester Jest');

  expect(task.description).toBe('Tester Jest');
  expect(task.status).toBe('todo');
});

test('liste les tâches', () => {
  createTask('Tâche 1');
  createTask('Tâche 2');

  const tasks = listTasks();
  expect(tasks.length).toBe(2);
});

test('supprime une tâche', () => {
  const task = createTask('À supprimer');
  deleteTask(task.id);

  const tasks = listTasks();
  expect(tasks.length).toBe(0);
});

test("met à jour la description d'une tâche", () => {
  const task = createTask('Ancienne description');

  updateTask(task.id, 'Nouvelle description');

  const tasks = listTasks();
  expect(tasks[0].description).toBe('Nouvelle description');
});

test('met à jour le statut en in-progress', () => {
  const task = createTask('Tâche en cours');

  updateTaskStatus(task.id, STATUS.IN_PROGRESS);

  const tasks = listTasks();
  expect(tasks[0].status).toBe(STATUS.IN_PROGRESS);
});

test('met à jour le statut en done', () => {
  const task = createTask('Tâche terminée');

  updateTaskStatus(task.id, STATUS.DONE);

  const tasks = listTasks();
  expect(tasks[0].status).toBe(STATUS.DONE);
});