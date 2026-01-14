# TaskTracker

# Ajouter une nouvelle tâche
task-cli add "Acheter des courses"
# Sortie : Tâche ajoutée avec succès (ID : 1)

# Mettre à jour et supprimer des tâches
task-cli update 1 "Acheter des courses et cuisiner le dîner"
task-cli delete 1

# Marquer une tâche comme en cours ou terminée
task-cli mark-in-progress 1
task-cli mark-done 1

# Lister toutes les tâches
task-cli list

# Lister les tâches par statut
task-cli list done
task-cli list todo
task-cli list in-progress
