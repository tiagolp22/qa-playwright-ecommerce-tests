import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { users } from './data/users';

test.describe('Authentification', () => {

  test('@smoke connexion valide redirige vers la liste des produits', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory/);
  });

  test('@smoke identifiants invalides affichent un message d\'erreur', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.invalid.username, users.invalid.password);
    await expect(login.errorMessage).toContainText('Username and password do not match');
  });

});
