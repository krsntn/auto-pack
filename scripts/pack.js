async function pack(page, clients, website) {
  const restTime = 150000; // 2:30
  let count = 0;

  for (const client of clients) {
    await page.waitFor('select[name="value"]');
    await page.select('select[name="value"]', client);
    const buildButton = await page.waitFor('#yui-gen1-button');
    await buildButton.evaluate((btn) => btn.click());
    console.log(`building ${client}...`);

    if (++count % 3 === 0) {
      await page.waitFor(restTime);
    }
    await page.waitFor(3000);
    await page.goto(website); // go to build page
  }
}

module.exports.pack = pack;
