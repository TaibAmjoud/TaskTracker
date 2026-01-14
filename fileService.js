const fs = require('fs');
const path = require('path');
const { TASK_FILE } = require('./constants');

const FILE_PATH = path.join(__dirname, TASK_FILE);

function loadTasks() {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
}

function saveTasks(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

module.exports = { loadTasks, saveTasks };