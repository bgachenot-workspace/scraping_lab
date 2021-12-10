const puppeteer = require("puppeteer")

async function getScreenshot() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("http://www.google.fr")
  await page.setViewport({ width: 1920, height: 969 })
  await page.screenshot({ path: "screens/google.png" })
  await browser.close()
}

module.exports = { getScreenshot };