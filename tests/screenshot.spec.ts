import { test } from "@playwright/test";

test.describe("Dev-Ashy Website Screenshots", () => {
  test("homepage screenshot", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/homepage.png", fullPage: true });
  });

  test("features section screenshot", async ({ page }) => {
    await page.goto("/#features");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/features.png", fullPage: true });
  });

  test("mobile creator section screenshot", async ({ page }) => {
    await page.goto("/#mobile-creator");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/mobile-creator.png", fullPage: true });
  });

  test("tech stack section screenshot", async ({ page }) => {
    await page.goto("/#tech-stack");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/tech-stack.png", fullPage: true });
  });

  test("templates section screenshot", async ({ page }) => {
    await page.goto("/#templates");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/templates.png", fullPage: true });
  });

  test("tools section screenshot", async ({ page }) => {
    await page.goto("/#tools");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/tools.png", fullPage: true });
  });

  test("OS page screenshot", async ({ page }) => {
    await page.goto("/os");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/os-page.png", fullPage: true });
  });
});

test.describe("Responsive Design", () => {
  test("mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/mobile-view.png", fullPage: true });
  });

  test("tablet viewport", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/tablet-view.png", fullPage: true });
  });
});
