describe('Login API Testing', () => { // test scenario
    
    it('Success Login', () => { // test case
      cy.request({
        method: 'POST', // http request
        url: 'http://barru.pythonanywhere.com/login', // url 
        body: {
          email: "batch278@gmail.com",
          password: "batch27" 
        }
        })
        .then((response) => {
          expect(response.status).to.equal(200); // verifikasi status code
          expect(response.body.status).to.equal('SUCCESS_LOGIN'); // verifikasi response body dan didalam value dari status
          expect(response.body.message).to.equal('Anda Berhasil Login'); // verifikasi response body dan didalam value dari message
        });
    });

    
    it('Failed Login with empty email', () => { // test case
      cy.request({
        method: 'POST', // http request
        url: 'http://barru.pythonanywhere.com/login', // url 
        body: {
          email: "",
          password: "batch27" 
        }
        })
        .then((response) => {
          expect(response.body.message).to.equal('Email tidak boleh kosong'); // verifikasi status code
          expect(response.body.status).to.equal('FAILED_LOGIN'); // verifikasi response body dan didalam value dari status
        });
    });
});