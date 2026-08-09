# Gemini — voix générative de Bosco

La PWA GitHub Pages appelle le proxy `https://bosco-vivant.able-hake-4182.chatgpt.site/api/bosco-dialogue`. Le navigateur envoie seulement le verdict déjà calculé et les données structurées utiles ; il n'envoie aucun prompt libre et ne possède aucune clé.

Le dialogue local est toujours produit en premier. Le texte distant ne remplace que sa formulation s'il contient 3 à 5 phrases, respecte le verdict et ne transforme jamais une sortie déconseillée en autorisation. Le timeout, l'absence de réseau, des données incomplètes, une erreur du proxy ou une réponse contradictoire conservent tous le texte local.

Le secret `GEMINI_API_KEY` doit être défini dans l'environnement serveur Sites, sans préfixe `NEXT_PUBLIC_`. Le modèle serveur est `gemini-3.6-flash` via le SDK officiel `@google/genai`.
