async function packSIT({ page, branchName, sitBuildURL, siteNumber }) {
  const sites = [
    'sit01-101web.gri7.com',
    'sit01-201web.gri7.com',
    'sit01-301web.gri7.com',
  ];
  const sites1 = [
    'sit01-101webdyn1.gri7.com',
    'sit01-201webdyn1.gri7.com',
    'sit01-301webdyn1.gri7.com',
  ];
  const sites2 = [
    'sit01-101webdyn2.gri7.com',
    'sit01-201webdyn2.gri7.com',
    'sit01-301webdyn2.gri7.com',
  ];

  let finalSites = sites;
  switch (siteNumber) {
    case 1:
      finalSites = sites1;
      break;
    case 2:
      finalSites = sites2;
      break;
    default:
      break;
  }

  const client = ['118-m', '1000-m', '977-m'];

  for (let i = 0; i < finalSites.length; i++) {
    const branchElement = 'input.setting-input';
    await page.waitFor(branchElement);
    await page.$eval(branchElement, (el) => (el.value = ''));
    await page.type(branchElement, branchName);

    await page.select('select[name="value"]', finalSites[i]);
    await page.select('tbody:nth-child(3) select[name="value"]', client[i]);
    const buildButton = await page.waitFor('#yui-gen1-button');
    await buildButton.evaluate((btn) => btn.click());

    await page.waitFor(3000);
    await page.goto(sitBuildURL); // go to build page
  }
}

export default packSIT;
