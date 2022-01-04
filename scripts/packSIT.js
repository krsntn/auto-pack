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

  let sitSites = sites;
  switch (siteNumber) {
    case 1:
      sitSites = sites1;
      break;
    case 2:
      sitSites = sites2;
      break;
    default:
      break;
  }

  const client = ['sit1', 'sit2', 'sit3'];

  for (let i = 0; i < sitSites.length; i++) {
    const branchElement = 'input.setting-input';
    await page.waitFor(branchElement);
    await page.$eval(branchElement, (el) => (el.value = ''));
    await page.type(branchElement, branchName);

    await page.select(
      '#main-panel > form > div.parameters > div:nth-child(2) > div.setting-main > div > select',
      sitSites[i]
    );
    await page.select(
      '#main-panel > form > div.parameters > div:nth-child(3) > div.setting-main > div > select',
      client[i]
    );
    const buildButton = await page.waitFor('#yui-gen1-button');
    await buildButton.evaluate((btn) => btn.click());

    await page.waitFor(3000);
    await page.goto(sitBuildURL); // go to build page
  }
}

export default packSIT;
