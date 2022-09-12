/// <reference types="cypress" />

describe('testing home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('members').then((json) => {
      cy.intercept('GET', Cypress.env('api_server') + '/singers', {
        statusCode: 200,
        body: json.members,
      });
    });
    cy.fixture('band').then((json) => {
      cy.intercept('GET', Cypress.env('api_server') + '/band/folksoul', {
        statusCode: 200,
        body: json.band,
      });
    });
  });
  it('if click login button user navigate to login page', () => {
    cy.get('[id=login-btn]').click();
    cy.url().should('include', 'login');
  });
  it('if user click the member animation stopped, and after click the sun image animation continued', () => {
    cy.get('[id=animation-7]').click();
    cy.get('[id=member-7]').should('have.class', 'pause');
    cy.get('[id=info-img]').invoke('attr', 'src').should('include', 'storage');
    cy.get('[id=sun-box]').click();
    cy.get('[id=member-7]').should('not.have.class', 'pause');
    cy.get('[id=info-img]')
      .invoke('attr', 'src')
      .should('not.include', 'storage');
  });
});
