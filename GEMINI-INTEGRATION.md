# Gemini — voix générative de Bosco

La PWA GitHub Pages appelle le proxy `https://bosco-vivant.able-hake-4182.chatgpt.site/api/bosco-dialogue`. Le navigateur envoie seulement le verdict déjà calculé et les données structurées utiles ; il n'envoie aucun prompt libre et ne possède aucune clé.

Le dialogue local est toujours calculé en premier, mais il n'est pas affiché avant la fin de la séquence. Bosco attend la première réponse Gemini puis, si elle échoue, affiche une courte vérification et tente une seule seconde requête silencieuse. Une seule réponse finale apparaît : Gemini si elle contient 3 à 5 phrases, respecte le verdict et ne transforme jamais une sortie déconseillée en autorisation ; sinon le dialogue local exact. Hors ligne, aucune requête n'est envoyée.

Le secret `GEMINI_API_KEY` doit être défini dans l'environnement serveur Sites, sans préfixe `NEXT_PUBLIC_`. Le modèle serveur est `gemini-3.6-flash` via le SDK officiel `@google/genai`.
