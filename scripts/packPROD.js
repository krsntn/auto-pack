async function packPROD({ page, clients, buildURL, numClient, buildTime }) {
  await page.goto(buildURL);

  console.log(
    '\n' +
      `Estimated Build Time: ${
        (Math.ceil(clients.length / numClient) * buildTime) / 1000 / 60
      }mins` +
      '\n'
  );

  let count = 0;

  console.time('Build time');
  for (const client of clients) {
    await page.waitFor('select[name="value"]');
    await page.select('select[name="value"]', client);
    const buildButton = await page.waitFor('#yui-gen1-button');
    await buildButton.evaluate((btn) => btn.click());

    console.log(`${++count}/${clients.length}: building ${client}...`);

    if (
      (count % numClient === 0 && count !== clients.length - 1) ||
      count === clients.length
    ) {
      await page.waitFor(buildTime);
    }

    await page.waitFor(2000);
    await page.goto(buildURL); // go to build page
  }
  console.timeEnd('Build time');
}

export default packPROD;
