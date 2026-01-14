# Task Tracker CLI

https://roadmap.sh/projects/task-tracker

Task Tracker CLI est une application en ligne de commande en **Node.js** permettant de gérer des tâches simplement depuis le terminal.

---

## Fonctionnalités

- Ajouter une tâche  
- Mettre à jour une tâche  
- Supprimer une tâche  
- Marquer une tâche comme en cours ou terminée  
- Lister toutes les tâches  
- Filtrer les tâches par statut  

---

## Installation

```bash
git clone https://github.com/TaibAmjoud/TaskTracker.git
cd task-tracker-cli
npm install
```

---

## Utilisation

Ajouter une tâche

```bash
task-cli add "Acheter des courses"
```

Mettre à jour une tâche

```bash
node task-cli update 1 "Acheter des courses et cuisiner le dîner"
```

Supprimer une tâche

```bash
node task-cli delete 1
```

Marquer une tâche

```bash
node task-cli mark-in-progress 1
node task-cli mark-done 1
```

Lister les tâches

```bash
node task-cli list
node task-cli list done
node task-cli list todo
node task-cli list in-progress
```
