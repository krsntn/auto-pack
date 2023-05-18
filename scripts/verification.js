async function verification(page, clientLength) {
  await page.goto(process.env.PROD_STATUS_URL);
  await page.waitForSelector("#trend");

  const failedClients = [];
  let failed = await page.$$eval(
    "#trend tr",
    (tr, clientLength) => {
      let failedBuildNumbers = [];

      for (let i = 1; i <= clientLength; i++) {
        const fail = tr[i]?.querySelector("td[data='0']");

        if (fail) {
          const buildNumber = tr[i]
            .querySelector("td:nth-child(2)")
            .getAttribute("data");
          failedBuildNumbers.push(buildNumber);
        }
      }

      return failedBuildNumbers;
    },
    clientLength
  );

  if (failed.length) {
    for (const number of failed) {
      failedClients.push(await getClientName(page, number));
    }
    console.log("\n" + "Build Failed: ", failedClients + "\n");
  }

  return failedClients;
}

async function getClientName(page, number) {
  await page.goto(`${process.env.PROD_URL}/${number}/parameters`);
  const clientName =
    "#main-panel > div > div > div.row.col-xs-24.pane-content > div:nth-child(1) > div.setting-main > input";
  await page.waitForSelector(clientName);
  const client = await page.$eval(clientName, (el) => el.value);
  return client;
}

export default verification;
