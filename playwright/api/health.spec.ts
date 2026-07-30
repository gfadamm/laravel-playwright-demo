import { test, expect } from '@playwright/test';

test('GET /api/health returns application status', {
    tag: ['@api', '@smoke']
}, async ({ request }) => {
  const response = await request.get('/api/health');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.status).toBe('ok');
  expect(body.app).toBe('Laravel Playwright Demo');

});

test('health endpoint performance', {
    tag: ['@api', '@smoke']
}, async ({ request }) => {
  const start = Date.now();

  const response = await request.get('/api/health');

  const duration = Date.now() - start;

  expect(response.ok()).toBeTruthy();
  expect(duration).toBeLessThan(500);

  const body = await response.json();

  expect(body).toEqual({
    status: 'ok',
    app: 'Laravel Playwright Demo',
  });
});