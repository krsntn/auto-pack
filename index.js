import dotenv from "dotenv";
import puppeteer from "puppeteer";
import autoLogin from "./scripts/login.js";
import packPROD from "./scripts/packPROD.js";
import packSIT from "./scripts/packSIT.js";
import verification from "./scripts/verification.js";
import { PLATFORM, SERVER, THEMES, clientList } from "./clientList.js";

dotenv.config();

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      protocolTimeout: 0,
    });
    const page = await browser.newPage();

    await autoLogin(page);

    if (process.env.SIT || process.env.SIT1 || process.env.SIT2) {
      await packSIT(page);
      console.log("Done");
    } else if (process.env.UAT) {
      await packUAT(page);
      console.log("Done");
    } else if (process.env.BATCH) {
      let toRunClients = [];
      switch (process.env.BATCH) {
        case "1":
          toRunClients = clientList.filter((x) =>
            [SERVER.AWS1, SERVER.AWS8, SERVER.AWS12].includes(x.server)
          );
          break;
        case "2":
          toRunClients = clientList.filter((x) =>
            [
              SERVER.AWS4,
              SERVER.AWS11,
              SERVER.AWS13,
              SERVER.AWS13a,
              SERVER.AWS16,
              SERVER.AWS17,
            ].includes(x.server)
          );
          break;
        case "3":
          toRunClients = clientList.filter((x) =>
            [SERVER.AZURE, SERVER.AWS2, SERVER.AWS3].includes(x.server)
          );
          break;
        case "4":
          toRunClients = clientList.filter((x) =>
            [SERVER.AWS5, SERVER.AWS6, SERVER.AWS9, SERVER.AWS10].includes(
              x.server
            )
          );
          break;
      }

      const clients = toRunClients.map((x) => x.client);
      console.log("Clients", clients);

      await packPROD(page, clients);

      let failedClients = await verification(page, clients.length);

      while (failedClients.length > 0) {
        console.log(
          "\n" + "===========================================" + "\n"
        );
        console.log("Rebuild Failed Clients: ", failedClients);
        await packPROD(page, failedClients);

        failedClients = await verification(page, failedClients.length);
        console.log("failedClients", failedClients);
      }
    }

    console.log("Finished");
    await browser.close();
  } catch (e) {
    console.log("error", e);
  }
})();
