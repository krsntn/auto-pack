import dotenv from 'dotenv';
import puppeteer from 'puppeteer';
import autoLogin from './scripts/login.js';
import packPROD from './scripts/packPROD.js';
import packUAT from './scripts/packUAT.js';
import verification from './scripts/verification.js';
import { PLATFORM, SERVER, THEMES, clientList } from './clientList.js';

dotenv.config();

// [START] PROD configuration =========
const NUM_CLIENT = 3; // number of clients to build at the same time
const BUILD_TIME = 120000; // 2:00 minutes
// [END] PROD configuration ===========

(async () => {
  try {
    const uatBuildURL = process.env.UAT_BUILD_URL;
    const buildURL = process.env.BUILD_URL;
    const statusURL = process.env.STATUS_URL;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    let toRunClients = [];

    // UAT ----------------------------------------------------------------
    if (process.env.UAT) {
      const branchName = process.env.UAT;
      await autoLogin(page, uatBuildURL, username, password);
      await packUAT({
        page,
        branchName,
        uatBuildURL,
      });
      console.log('Done');
      return;
    }

    // PROD: run particular server ----------------------------------------
    if (process.env.BATCH === '1') {
      // 1st Batch
      toRunClients = clientList.filter((x) =>
        [SERVER.AWS12].includes(x.server)
      );
    } else if (process.env.BATCH === '2') {
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
          SERVER.AZURE,
          SERVER.AWS1,
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
    await packPROD({
      page,
      clients,
      buildURL,
      numClient: NUM_CLIENT,
      buildTime: BUILD_TIME,
    });
    await verification(page, statusURL, clients.length);

    console.log('Finished');
    await browser.close();
  } catch (e) {
    console.log('error', e);
  }
})();
