const puppeteer = require("puppeteer")

const wait = require("util").promisify(setTimeout)

async function Raid(id, password, name){
  const browser = await puppeteer.launch({
    args: [
      '--use-fake-ui-for-media-stream',
    ],
    ignoreDefaultArgs: ['--mute-audio'],
    headless: true
  });
  const page = await browser.newPage();

  await page.goto(`https://pwa.zoom.us/wc/${id}/join?from=pwa`)
  await page.type("#input-for-pwd", password)
  await page.type("#input-for-name", name)
  await page.click(".preview-join-button")
});
