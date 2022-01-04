async function packUAT({ page, branchName, uatBuildURL }) {
  const sites = ['www.513xyz.com', 'dsf.513xyz.com', 'uat07wap.513xyz.com'];
  const client = ['sit1', 'sit2', 'sit3'];

  for (let i = 0; i < sites.length; i++) {
    const branchElement = 'input.setting-input';
    await page.waitFor(branchElement);
    await page.$eval(branchElement, (el) => (el.value = ''));
    await page.type(branchElement, branchName);

    await page.select(
      '#main-panel > form > div.parameters > div:nth-child(2) > div.setting-main > div > select',
      sites[i]
    );
    await page.select(
      '#main-panel > form > div.parameters > div:nth-child(3) > div.setting-main > div > select',
      client[i]
    );
    const buildButton = await page.waitFor('#yui-gen1-button');
    await buildButton.evaluate((btn) => btn.click());

    await page.waitFor(3000);
    await page.goto(uatBuildURL); // go to build page
  }
}

export default packUAT;
