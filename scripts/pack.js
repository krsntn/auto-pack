async function pack(page, clients, url) {
  const restTime = 150000; // 2:30 minutes

  console.log(
    '\n' +
      `Estimated Build Time: ${
        (Math.ceil(clients.length / 3) * restTime) / 1000 / 60
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

    if (count % 3 === 0 || count === clients.length) {
      await page.waitFor(restTime);
    }
    await page.goto(url); // go to build page
  }
  console.timeEnd('Build time');
}

module.exports.pack = pack;
