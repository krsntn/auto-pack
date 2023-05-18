async function packUAT(page) {
  await page.goto(process.env.SIT_BUILD_URL);
  const sites = ["www.513xyz.com", "dsf.513xyz.com", "uat07wap.513xyz.com"];
  const client = ["sit1", "sit2", "sit3"];

  for (let i = 0; i < sites.length; i++) {
    const branchElement = "input.setting-input";
    await page.waitForSelector(branchElement);
    await page.$eval(branchElement, (el) => (el.value = ""));
    await page.type(branchElement, process.env.UAT);

    await page.select(
      "#main-panel > form > div.parameters > div:nth-child(2) > div.setting-main > div > select",
      sites[i]
    );
    await page.select(
      "#main-panel > form > div.parameters > div:nth-child(3) > div.setting-main > div > select",
      client[i]
    );

    const buildButton = "#yui-gen1-button";
    await page.waitForSelector(buildButton);
    await Promise.all([page.waitForNavigation(), page.click(buildButton)]);

    await page.goto(process.env.SIT_BUILD_URL); // go to build page
  }
}

export default packUAT;
