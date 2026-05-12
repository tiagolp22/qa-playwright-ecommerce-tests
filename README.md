# Portfolio QA E2E — Playwright + TypeScript

![CI](https://github.com/tiagolp22/qa-playwright-ecommerce-tests-clean/actions/workflows/playwright.yml/badge.svg)

Projet de portfolio en assurance qualite, axe sur l'automatisation de tests web end-to-end avec Playwright et TypeScript.

L'application cible est [Sauce Demo](https://www.saucedemo.com/), une application de demonstration e-commerce couramment utilisee pour pratiquer l'automatisation sur un flux realiste.

## Structure du projet

```
pages/
  login.page.ts       — navigation et actions sur la page de connexion
  inventory.page.ts   — interactions avec la liste des produits
  cart.page.ts        — gestion du panier
  checkout.page.ts    — formulaire et confirmation de commande
tests/
  data/users.ts       — donnees de test centralisees
  auth.spec.ts        — tests d'authentification
  cart.spec.ts        — tests du panier
  checkout.spec.ts    — parcours complet de commande
```

## Scenarios couverts

| Scenario | Tag | Statut |
|---|---|---|
| Connexion valide → page produits | @smoke | ✅ |
| Identifiants invalides → message d'erreur | @smoke | ✅ |
| Ajout d'un produit au panier | @smoke | ✅ |
| Retrait d'un produit du panier | @regression | ✅ |
| Parcours complet checkout | @regression | ✅ |

## Installation

```bash
npm install
npx playwright install
```

## Execution

```bash
# Suite complete
npx playwright test

# Navigateur visible
npx playwright test --headed

# Smoke tests uniquement
npx playwright test --grep @smoke

# Tests de regression uniquement
npx playwright test --grep @regression

# Rapport HTML
npx playwright show-report
```

## Ce que ce projet demontre

- Tests fonctionnels E2E avec Playwright et TypeScript
- Pattern Page Object Model pour la maintenabilite et la lisibilite
- Donnees de test separees des specs
- Tags @smoke et @regression pour organiser les suites d'execution
- CI/CD avec GitHub Actions — execution automatique sur push et PR
- Captures d'ecran et video conservees automatiquement sur echec
