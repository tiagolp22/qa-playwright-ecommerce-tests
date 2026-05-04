# Portfolio QA E2E - Playwright

Projet personnel de portfolio en assurance qualite axe sur l'automatisation de tests web end-to-end avec Playwright et TypeScript.

L'objectif de ce depot est de demontrer une approche QA concrete sur un parcours e-commerce realiste:

- connexion utilisateur
- validation de comportements attendus
- ajout au panier
- verification d'etat de l'interface
- evolution graduelle vers une suite de regression plus complete

Le site cible actuel est [Sauce Demo](https://www.saucedemo.com/), une application de demonstration souvent utilisee pour pratiquer l'automatisation de tests sur un flux de type commerce electronique.

## Ce que ce projet montre

- tests fonctionnels E2E avec Playwright
- utilisation de TypeScript
- assertions claires sur l'URL, le contenu et l'etat du panier
- structure de base prete a evoluer vers Page Object Model
- execution locale et integration continue avec GitHub Actions

## Scenario actuellement automatise

Le premier test couvre un parcours simple mais utile:

1. ouvrir la page de connexion
2. se connecter avec un utilisateur valide
3. verifier l'acces a la page des produits
4. ajouter un produit au panier
5. confirmer que le panier affiche bien `1` article

## Installation

```bash
npm install
npx playwright install
```

## Execution des tests

Executer toute la suite:

```bash
npx playwright test
```

Executer les tests avec le navigateur visible:

```bash
npx playwright test --headed
```

Executer un seul fichier:

```bash
npx playwright test tests/login-and-cart.spec.ts
```

Ouvrir le rapport HTML:

```bash
npx playwright show-report
```

## Prochaines etapes

- ajouter un test de connexion invalide
- couvrir le retrait d'un article du panier
- couvrir la validation du checkout
- separer les donnees de test et les selecteurs
- introduire une structure Page Object Model
- enrichir la documentation QA: cas de test, risques, hypotheses et limites

## Contexte

Ce projet fait partie de mon portfolio public QA et appuie mon positionnement pour des roles comme:

- Analyste AQ junior
- Software QA Analyst
- Testeur logiciel

L'idee n'est pas seulement de "faire des clics", mais de montrer une demarche de qualite: comprendre un flux utilisateur, identifier des verifications pertinentes et construire une base de regression maintenable.
