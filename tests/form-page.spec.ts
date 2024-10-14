import { expect, test } from "@playwright/test";

const pageUrl = "http://localhost:3000/register";

// test("この内容で送信するでダイアログ発生", async ({ page }) => {
//   await page.goto(pageUrl);
//   await page.getByTestId("go-to-confirm").click();
//   const dialogPromise = page.waitForEvent("dialog");
//   await page.getByTestId("form-submit").click();
//   await page.pause(); // 一時停止
//   const dialog = await dialogPromise;
//   expect(dialog.message()).toBe("申し込みます");
// });

test.beforeEach(async ({ page }) => {
  await page.goto(pageUrl);
});

test("コンソールにエラーがないこと", async ({ page }) => {
  const errors: string[] = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    }
  });
  await page.goto(pageUrl);
  expect(errors).toEqual([]);
});

test("入力確認画面の送信ボタンが「この内容で送信する」になっている", async ({ page }) => {
  await page.getByTestId("go-to-confirm").click();
  await expect(page.getByTestId("form-submit")).toHaveText("この内容で送信する");
  await expect(page.getByTestId("form-submit")).toHaveClass("w-1/2 text-center bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow");
});

test("入力確認画面送信ボタンのCSSクラスチェック", async ({ page }) => {
  await page.getByTestId("go-to-confirm").click();
  await expect(page.getByTestId("form-submit")).toHaveClass("w-1/2 text-center bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow");
});
