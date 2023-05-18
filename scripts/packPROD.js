async function packPROD(page, clients) {
  const url = process.env.PROD_BUILD_URL;
  await page.goto(url);

  console.log(
    "\n" +
      `Estimated Build Time: ${
        (Math.ceil(clients.length / 3) * 180000) / 1000 / 60
      }mins` +
      "\n"
  );

  let count = 0;

  console.time("Build time");

  for (let i = 0; i < clients.length; i++) {
    const client = clients[i];

    await page.waitForSelector('select[name="value"]');
    await page.select('select[name="value"]', client);
    const buildButton = "#yui-gen1-button";
    await page.waitForSelector(buildButton);
    await Promise.all([page.waitForNavigation(), page.click(buildButton)]);

    console.log(`${++count}/${clients.length}: building ${client}...`);

    if (i >= 2) {
      const pro1 = page.waitForFunction(
        () => {
          const thirdTr = document.querySelector(
            `#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(${2})`
          );
          const classes = thirdTr.getAttribute("class");
          return classes === "build-row single-line overflow-checked";
        },
        { timeout: 600000 }
      );

      const pro2 = page.waitForFunction(
        () => {
          const thirdTr = document.querySelector(
            `#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(${3})`
          );
          const classes = thirdTr.getAttribute("class");
          return classes === "build-row single-line overflow-checked";
        },
        { timeout: 600000 }
      );

      const pro3 = page.waitForFunction(
        () => {
          const thirdTr = document.querySelector(
            `#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(${4})`
          );
          const classes = thirdTr.getAttribute("class");
          return classes === "build-row single-line overflow-checked";
        },
        { timeout: 600000 }
      );

      await Promise.race([pro1, pro2, pro3]).then(() => {
        page.goto(process.env.PROD_BUILD_URL);
      });
    } else {
      await page.goto(process.env.PROD_BUILD_URL);
    }
  }

  // after run all clients =========
  const pro1 = page.waitForFunction(
    () => {
      const thirdTr = document.querySelector(
        `#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(${2})`
      );
      const classes = thirdTr.getAttribute("class");
      return classes === "build-row single-line overflow-checked";
    },
    { timeout: 600000 }
  );

  const pro2 = page.waitForFunction(
    () => {
      const thirdTr = document.querySelector(
        `#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(${3})`
      );
      const classes = thirdTr.getAttribute("class");
      return classes === "build-row single-line overflow-checked";
    },
    { timeout: 600000 }
  );

  const pro3 = page.waitForFunction(
    () => {
      const thirdTr = document.querySelector(
        `#buildHistory > div.row.pane-content > table > tbody > tr:nth-child(${4})`
      );
      const classes = thirdTr.getAttribute("class");
      return classes === "build-row single-line overflow-checked";
    },
    { timeout: 600000 }
  );

  await Promise.all([pro1, pro2, pro3]).then(() => {
    console.timeEnd("Build time");
  });
}

export default packPROD;
