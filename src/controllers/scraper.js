const puppeteer = require('puppeteer');

async function scrapeData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = page.$x(
    '/html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[3]/div/section/div/div/div/div/div[3]/div/div/div[2]/span'
  );
  const txt = await el.getProperty('textContent');
  const rawTxt = await txt.jsonValue();

  console.log(rawTxt);
  browser.close();
}

scrapeData('https://twitter.com/home');
