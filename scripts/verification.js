async function verification(page, url, clientLength) {
  let failed = [];
  const failedClients = [];

  await page.goto(url);

  await page.waitFor('.sortable tr .model-link.inside');

  failed = await page.$$eval(
    '.sortable tr',
    (tr, clientLength) => {
      let failedBuildNumbers = [];

      for (let i = 1; i <= clientLength; i++) {
        const status = tr[i].querySelector('img')
          ? tr[i].querySelector('img').getAttribute('alt')
          : '';

        if (status === 'Failed') {
          const buildNumber = tr[i]
            .querySelector('td:nth-of-type(2)')
            .getAttribute('data');
          failedBuildNumbers.push(buildNumber);
        }
      }

      return failedBuildNumbers;
    },
    clientLength
  );

  if (failed.length) {
    for (number of failed) {
      failedClients.push(await getClientName(page, number));
    }
    console.log('\n' + 'Build Failed: ', failedClients + '\n');
  }
}

async function getClientName(page, number) {
  await page.goto(`${process.env.PROD_URL}/${number}/parameters`);
  const client = await page.evaluate(
    `document.querySelector('input[name="value"]').getAttribute('value')`
  );
  return client;
}

module.exports.verification = verification;
