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
    let toRunClients = [];
    if (process.env.BATCH === '2') {
      // 2nd Batch
      toRunClients = clientList.filter((x) =>
        [
          SERVER.AWS4,
          SERVER.AWS13,
          SERVER.AWS13a,
          SERVER.AWS16,
          SERVER.AWS17,
        ].includes(x.server)
      );
    } else if (process.env.BATCH === '3') {
      // 3rd Batch - Part 1
      toRunClients = clientList.filter((x) =>
        [
          SERVER.AWS1,
          SERVER.AZURE,
          SERVER.AWS2,
          SERVER.AWS3,
          SERVER.AWS5,
        ].includes(x.server)
      );
    } else if (process.env.BATCH === '4') {
      // 3rd Batch - Part 2
      toRunClients = clientList.filter((x) =>
        [
          SERVER.AWS6,
          SERVER.AWS8,
          SERVER.AWS9,
          SERVER.AWS10,
          SERVER.AWS11,
        ].includes(x.server)
      );
    }

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
