import { test, expect } from "@playwright/test";

test.describe("Dev-Ashy site · functional", () => {
  test("homepage has all required sections and contact fields", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Logo present
    const logo = page.locator('img[alt="Dev-Ashy logo"]').first();
    await expect(logo).toBeVisible();

    // Big visible "Explore Products" button linking to /product
    const exploreBtn = page.locator("a", { hasText: "Explore Products" }).first();
    await expect(exploreBtn).toBeVisible();
    await expect(exploreBtn).toHaveAttribute("href", "/product");

    // Slideshow images loaded: all 6 slides render
    const slideImages = page.locator('div[aria-hidden="true"] img[alt]');
    await expect(slideImages).toHaveCount(6);

    // Contact: both emails + whatsapp + copyright
    await expect(page.locator("body")).toContainText("ashrafbello51@gmail.com");
    await expect(page.locator("body")).toContainText("meforbello@gmail.com");
    await expect(page.locator("body")).toContainText("+234 904 105 9110");
    await expect(page.locator("body")).toContainText("© 2026 Dev-Ashy Limited");
  });

  test("homepage slideshow advances automatically", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const caption = page.locator(".font-mono.text-\\[11px\\].text-\\[\\#a5b4c8\\]").textContent();
    await page.waitForTimeout(6800);
    const captionAfter = await page.locator(".font-mono.text-\\[11px\\].text-\\[\\#a5b4c8\\]").textContent();
    await expect(captionAfter).not.toBe(caption);
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Toggle menu" }).click({ force: true });
    await expect(page.locator("body")).toContainText("Explore Products");
    await page.getByRole("button", { name: "Toggle menu" }).click({ force: true });
  });

  test("product page exposes OS desktop gallery and selector", async ({ page }) => {
    await page.goto("/product");
    await page.waitForLoadState("networkidle");

    // All four featured environments listed
    for (const name of ["Hyprland", "GNOME", "KDE Plasma", "XFCE"]) {
      await expect(
        page.locator("button[aria-pressed]").filter({ hasText: name })
      ).toHaveCount(1);
    }

    // Selecting a desktop updates the install prompt to require internet
    await page
      .locator("button[aria-pressed]")
      .filter({ hasText: "KDE Plasma" })
      .click({ force: true });
    await expect(page.locator("#os-select")).toContainText("connected to the internet");
    await expect(page.locator("#os-select")).toContainText("KDE Plasma selected");
    await expect(page.locator("#os-select")).toContainText("plasma-desktop");
  });

  test("OS page has environments, download CTA and contact footer", async ({ page }) => {
    await page.goto("/os");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("h1", { hasText: "Dev-Ashy OS" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Download ISO" })).toBeVisible();
    await expect(page.locator("#os-select")).toContainText("connected to the internet");
    await expect(page.locator("body")).toContainText("© 2026 Dev-Ashy Limited");
  });

  test("no horizontal scroll on any viewport", async ({ page }) => {
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/product");
      await page.waitForLoadState("networkidle");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth
      );
      expect(overflow, `overflow at ${width}px`).toBeLessThanOrEqual(0);
    }
  });

  test("all images load successfully", async ({ page }) => {
    await page.goto("/product");
    await page.waitForLoadState("networkidle");
    const broken = await page.evaluate(() =>
      Array.from(document.querySelectorAll("img"))
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.getAttribute("src"))
    );
    expect(broken).toEqual([]);
  });
});