async function packSIT(page) {
  await page.goto(process.env.SIT_BUILD_URL);

  const sites = [
    "sit01-101web.gri7.com",
    "sit01-201web.gri7.com",
    "sit01-301web.gri7.com",
  ];
  const sites1 = [
    "sit01-101webdyn1.gri7.com",
    "sit01-201webdyn1.gri7.com",
    "sit01-301webdyn1.gri7.com",
  ];
  const sites2 = [
    "sit01-101webdyn2.gri7.com",
    "sit01-201webdyn2.gri7.com",
    "sit01-301webdyn2.gri7.com",
  ];

  let sitSites;
  if (process.env.SIT) {
    sitSites = sites;
  } else if (process.env.SIT1) {
    sitSites = sites1;
  } else if (process.env.SIT2) {
    sitSites = sites2;
  }

  const client = ["sit1", "sit2", "sit3"];

  for (let i = 0; i < sitSites.length; i++) {
    const branchElement = "input.setting-input";
    await page.waitForSelector(branchElement);
    await page.$eval(branchElement, (el) => (el.value = ""));
    await page.type(
      branchElement,
      process.env.SIT || process.env.SIT1 || process.env.SIT2
    );

    await page.select(
      "#main-panel > form > div.parameters > div:nth-child(2) > div.setting-main > div > select",
      sitSites[i]
    );
    await page.select(
      "#main-panel > form > div.parameters > div:nth-child(3) > div.setting-main > div > select",
      client[i]
    );

    const buildButton = "#yui-gen1-button";
    await page.waitForSelector(buildButton);
    await Promise.all([page.waitForNavigation(), page.click(buildButton)]);

    await page.goto(process.env.SIT_BUILD_URL); // refresh page
  }
}

export default packSIT;
