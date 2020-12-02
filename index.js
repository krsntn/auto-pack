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
    //     // [THEMES.LIGHT, THEMES.CUSTOM_LIGHT].includes(x.themes)
    //     [THEMES.DARK, THEMES.CUSTOM_DARK].includes(x.themes)
    // );

    // Run ZH & NEWZH ----------------------------------------
    // const toRunClients = clientList.filter((x) => x.platform !== PLATFORM.CP);

    // RUN particular server ----------------------------------------
    // 2nd Batch
    // const toRunClients = clientList.filter((x) =>
    //   [
    //     SERVER.AWS4,
    //     SERVER.AWS13,
    //     SERVER.AWS13a,
    //     SERVER.AWS16,
    //     SERVER.AWS17,
    //   ].includes(x.server)
    // );

    // 3rd Batch
    const toRunClients = clientList.filter(
      (x) =>
        ![
          SERVER.AWS4,
          SERVER.AWS12,
          SERVER.AWS13,
          SERVER.AWS13a,
          SERVER.AWS16,
          SERVER.AWS17,
        ].includes(x.server)
    );

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
