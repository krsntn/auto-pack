async function autoLogin(page, url, username, password) {
  await page.goto(url);

  // username
  const usernameElement = '#j_username';
  await page.waitFor(usernameElement);
  await page.type(usernameElement, username);

  // password
  const passwordElement = 'body > div > div > form > div:nth-child(2) > input';
  await page.waitFor(passwordElement);
  await page.type(passwordElement, password);

  // login button
  const submitButton = await page.waitFor(
    'body > div > div > form > div.submit.formRow > input'
  );
  await submitButton.evaluate((btn) => btn.click());
}

export default autoLogin;
