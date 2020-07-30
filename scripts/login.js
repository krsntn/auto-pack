async function autoLogin(page, url, username, password) {
  await page.goto(url);

  // username
  const usernameElement = '#j_username';
  await page.waitFor(usernameElement);
  await page.type(usernameElement, username);

  // password
  const passwordElement = 'input[name="j_password"]';
  await page.waitFor(passwordElement);
  await page.type(passwordElement, password);

  // login button
  const submitButton = await page.waitFor('input[name="Submit"]');
  await submitButton.evaluate((btn) => btn.click());
}

module.exports.autoLogin = autoLogin;
