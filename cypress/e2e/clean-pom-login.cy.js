import { loginPage } from '../data/assert.data';
import { EMPTY_LOGIN, VALID_LOGIN, INVALID_LOGIN } from '../data/login.data';

describe('Login feature', () => {
  it('should successfully log in with valid credentials', () => {
    loginPage.login(VALID_LOGIN.email, VALID_LOGIN.password).then((response) => {
      loginPage.assertSuccessLogin(response);
    });
  });

  it('should fail log in with invalid credentials', () => {
    loginPage.login(INVALID_LOGIN.email, INVALID_LOGIN.password).then((response) => {
      loginPage.assertFailedLoginInvalidCredentials(response);
    });
  });

  it('failed login because email is empty', () => {
    loginPage.login(EMPTY_LOGIN.email, EMPTY_LOGIN.password).then((response) => {
      loginPage.assertFailedLoginEmptyCredentials(response);
    });
  });
});
