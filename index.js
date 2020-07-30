require('dotenv').config();

const puppeteer = require('puppeteer');
const { autoLogin } = require('./scripts/login');
const { pack } = require('./scripts/pack');
const { verification } = require('./scripts/verification');
const { PLATFORM, SERVER, THEMES, clientList } = require('./clientList');

(async () => {
  try {
    const buildURL = process.env.BUILD_URL;
    const statusURL = process.env.STATUS_URL;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    // Run all ----------------------------------------
    // const toRunClients = clientList;

    // Run CP ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.platform === PLATFORM.CP);

    // Run ZH ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.platform === PLATFORM.ZH);

    // Run NEWZH ----------------------------------------
    // const toRunClients = clientList.filter(
    //   (x) =>
    //     x.platform === PLATFORM.NEWZH &&
    //     [THEMES.LIGHT, THEMES.CUSTOM_LIGHT].includes(x.themes)
    //   // [THEMES.DARK, THEMES.CUSTOM_DARK].includes(x.themes)
    // );

    // Run ZH & NEWZH ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.platform !== PLATFORM.CP);

    // RUN particular server ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.server === SERVER.AWS5);
    // ----------------------------------------

    const clients = toRunClients.map((x) => x.client);
    console.log('Clients', clients);

    await autoLogin(page, buildURL, username, password);
    await pack(page, clients, buildURL);
    await verification(page, statusURL, clients.length);

    console.log('Finished');
    await browser.close();
  } catch (e) {
    console.log('error', e);
  }
})();
