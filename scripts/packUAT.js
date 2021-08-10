async function packUAT({ page, branchName, uatBuildURL }) {
  const sites = ['www.513xyz.com', 'dsf.513xyz.com', 'uat07wap.513xyz.com'];
  const client = ['118-m', '1000-m', '977-m'];

  for (let i = 0; i < sites.length; i++) {
    const branchElement = 'input.setting-input';
    await page.waitFor(branchElement);
    await page.$eval(branchElement, (el) => (el.value = ''));
    await page.type(branchElement, branchName);

    await page.select('select[name="value"]', sites[i]);
    await page.select('tbody:nth-child(3) select[name="value"]', client[i]);
    const buildButton = await page.waitFor('#yui-gen1-button');
    await buildButton.evaluate((btn) => btn.click());

    await page.waitFor(3000);
    await page.goto(uatBuildURL); // go to build page
  }
}

export default packUAT;