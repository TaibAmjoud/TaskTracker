#!/usr/bin/env node

const {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
  updateTaskStatus
} = require('./taskService');

const { STATUS } = require('./constants');
const { printTasks, handleError } = require('./utils');

const args = process.argv.slice(2);
const command = args[0];

try {
  switch (command) {
    case 'add':
      const task = createTask(args[1]);
      console.log(`Tâche ajoutée (ID: ${task.id})`);
      break;

    case 'list':
      printTasks(listTasks(args[1]));
      break;

    case 'update':
      updateTask(args[1], args[2]);
      console.log('Tâche mise à jour');
      break;

    case 'delete':
      deleteTask(args[1]);
      console.log('Tâche supprimée');
      break;

    case 'mark-in-progress':
      updateTaskStatus(args[1], STATUS.IN_PROGRESS);
      console.log('Tâche marquée en cours');
      break;

    case 'mark-done':
      updateTaskStatus(args[1], STATUS.DONE);
      console.log('Tâche terminée');
      break;

    default:
      console.log('Commande inconnue');
  }
} catch (error) {
  handleError(error);
}