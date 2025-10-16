import os

# Chemin du dossier à explorer
dossier = "assets/images"  # <-- Remplace par le chemin réel

# Liste pour stocker les noms de fichiers
fichiers = []

# Parcours du dossier
for nom in os.listdir(dossier):
    # Vérifie si c'est un fichier (et pas un sous-dossier)
    if os.path.isfile(os.path.join(dossier, nom)):
        fichiers.append(nom)

# Affiche le tableau des fichiers
print(fichiers)
