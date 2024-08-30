import { ENDPOINT } from '../const/routes';
import { REQRES_URL } from '../const/routes';

describe('List Users', () => {
  it('should successfully show data', () => {
    cy.request({
      method: 'GET',
      url: REQRES_URL.baseUrl + ENDPOINT.list,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.page).to.equal(2);
      expect(response.body.per_page).to.equal(6);
      expect(response.body.total).to.equal(12);
    });
  })

  it('should fail show empty object', () => {
    cy.request({
        method: 'GET',
        url: REQRES_URL.baseUrl + ENDPOINT.list_fail,
      }).then((response) => {
        expect(response.status).to.equal(404);
        expect(response.body).to.equal({});
      });
  })
});