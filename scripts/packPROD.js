async function packPROD(page, clients) {
  await page.goto(process.env.PROD_BUILD_URL);

  console.log(
    "\n" +
      `Estimated Build Time: ${
        (Math.ceil(clients.length / 3) * 180000) / 1000 / 60
      }mins` +
      "\n"
  );

  let count = 0;

  console.time("Build time");
  for (const client of clients) {
    await page.waitForSelector('select[name="value"]');
    await page.select('select[name="value"]', client);
    const buildButton = "#yui-gen1-button";
    await page.waitForSelector(buildButton);
    await Promise.all([page.waitForNavigation(), page.click(buildButton)]);

    console.log(`${++count}/${clients.length}: building ${client}...`);

    const isThirdTrExist = await page.$(
      "#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(4)"
    );

    if (isThirdTrExist) {
      await page.waitForFunction(
        () => {
          const thirdTr = document.querySelector(
            "#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(4)"
          );
          const classes = thirdTr.getAttribute("class");
          return classes === "build-row single-line overflow-checked";
        },
        { timeout: 300000 }
      );
    }

    await page.goto(process.env.PROD_BUILD_URL); // go to build page
  }

  await page.waitForFunction(
    () => {
      const lastClient = document.querySelectorAll(
        ".pane.jenkins-pane.stripped tr"
      )[1];
      const classes = lastClient.getAttribute("class");
      return classes === "build-row single-line overflow-checked";
    },
    { timeout: 300000 }
  );

  console.timeEnd("Build time");
}

export default packPROD;
