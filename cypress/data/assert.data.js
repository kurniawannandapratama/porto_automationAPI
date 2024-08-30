// login.page.js

import { BASE_URL } from '../const/routes';
import { ROUTES } from '../const/routes';

class LoginPage {
  login(email, password) {
    return cy.request({
      method: 'POST',
      url: BASE_URL.baseUrl + ROUTES.login,
      body: {
        email,
        password
      },
    });
  }

  assertSuccessLogin(response) {
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('SUCCESS_LOGIN');
    expect(response.body.message).to.equal('Anda Berhasil Login');
  }

  assertFailedLoginInvalidCredentials(response) {
    expect(response.status).to.equal(200);
    expect(response.body.data).to.equal("User's not found");
    expect(response.body.status).to.equal('FAILED_LOGIN');
    expect(response.body.message).to.equal('Email atau Password Anda Salah');
  }

  assertFailedLoginEmptyCredentials(response) {
    expect(response.status).to.equal(200);
    expect(response.body.data).to.equal('Cek Formulir Anda');
    expect(response.body.status).to.equal('FAILED_LOGIN');
    expect(response.body.message).to.equal('Email & Password tidak boleh kosong');
  }
}

export const loginPage = new LoginPage();
