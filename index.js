require('dotenv').config();

const puppeteer = require('puppeteer');
const { autoLogin } = require('./scripts/login');
const { pack } = require('./scripts/pack');
const { PLATFORM, SERVER, clientList } = require('./clientList');

(async () => {
  try {
    const website = process.env.WEBSITE;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(website);

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    // Run all ----------------------------------------
    const toRunClients = clientList;
    // Run CP ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.platform === PLATFORM.CP);
    // Run ZH ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.platform === PLATFORM.ZH);
    // Run NEWZH ----------------------------------------
    // const toRunClients = clientList.filter(
    //   (x) => x.platform === PLATFORM.NEWZH
    // );
    // Run ZH & NEWZH ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.platform !== PLATFORM.CP);
    // RUN particular server ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.server === SERVER.AWS5);
    // ----------------------------------------

    const clients = toRunClients.map((x) => x.client);
    console.log('clients', clients);

    await autoLogin(page, username, password);
    await pack(page, clients, website);

    await browser.close();
  } catch (e) {
    console.log('error', e);
  }
})();
