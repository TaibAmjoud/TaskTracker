function printTasks(tasks) {
  if (tasks.length === 0) {
    console.log('Aucune tâche trouvée.');
    return;
  }

  tasks.forEach(t => {
    console.log(`#${t.id} | ${t.description} | ${t.status}`);
  });
}

function handleError(error) {
  console.error('Erreur :', error.message);
}

module.exports = { printTasks, handleError };
