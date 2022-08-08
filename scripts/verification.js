async function verification(page, url, clientLength) {
  let failed = [];
  const failedClients = [];

  await page.goto(url);

  await page.waitFor('#trend');

  failed = await page.$$eval(
    '.sortable tr',
    (tr, clientLength) => {
      let failedBuildNumbers = [];

      for (let i = 1; i <= clientLength; i++) {
        const pass = tr[i]?.querySelector(
          '.build-status-icon__wrapper.icon-blue'
        );
        const fail = tr[i]?.querySelector(
          '.build-status-icon__wrapper.icon-red'
        );

        if (fail) {
          const buildNumber = tr[i]
            .querySelector('td:nth-child(2)')
            .getAttribute('data');
          failedBuildNumbers.push(buildNumber);
        }

        console.log('pass', pass);
        console.log('fail', fail);
      }

      return failedBuildNumbers;
    },
    clientLength
  );

  if (failed.length) {
    for (const number of failed) {
      failedClients.push(await getClientName(page, number));
    }
    console.log('\n' + 'Build Failed: ', failedClients + '\n');
  }

  return failedClients;
}

async function getClientName(page, number) {
  await page.goto(`${process.env.PROD_URL}/${number}/parameters`);
  await page.waitFor(3000);
  const client = await page.evaluate(
    `document.querySelector('#main-panel > div > div > div.row.col-xs-24.pane-content > div:nth-child(1) > div.setting-main > input').value`
  );
  return client;
}

export default verification;
