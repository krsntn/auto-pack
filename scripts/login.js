async function autoLogin(page) {
  await page.goto("https://jenkins.servnimo.com/");

  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  // username
  const usernameElement = "#j_username";
  await page.waitForSelector(usernameElement);
  await page.type(usernameElement, username);

  // password
  const passwordElement = "body > div > div > form > div:nth-child(2) > input";
  await page.waitForSelector(passwordElement);
  await page.type(passwordElement, password);

  // login button
  const loginButton = "body > div > div > form > div.submit.formRow > input";
  await page.waitForSelector(loginButton);
  await Promise.all([page.waitForNavigation(), page.click(loginButton)]);
}

export default autoLogin;
