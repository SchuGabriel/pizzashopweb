import { test, expect } from '@playwright/test';
test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up/', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Pizza Shop');

  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Gabriel Schu');

  await page.getByRole('textbox', { name: 'Seu celular' }).fill('1234567891');

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('johndoe@example.com');

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click();

  const toast = page.getByText('Restaurante cadastrado com sucesso!');

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up/', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Schu Pizzas');

  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Gabriel Schu');

  await page.getByRole('textbox', { name: 'Seu celular' }).fill('1234567891');

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('schu-gabriel@example.com');

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click();

  const toast = page.getByText('Erro ao cadastrar restaurante.');

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-up/', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Fazer login' }).click();

  expect(page.url()).toContain('/sign-in');
});
