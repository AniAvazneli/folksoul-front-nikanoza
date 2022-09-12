/// <reference types="cypress" />

describe('test musician form pages', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[id=login-btn]').click();
    cy.get('[id=username]').type('nikanoza');
    cy.get('[id=password]').type('dardubala');
    cy.intercept('POST', Cypress.env('api_server') + '/login', {
      statusCode: 200,
      body: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdlbGEiLCJl',
      },
    });
    cy.setCookie(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdlbGEiLCJl'
    );
    cy.fixture('links').then((json) => {
      cy.intercept('GET', Cypress.env('api_server') + '/links', {
        statusCode: 200,
        body: json.links,
      });
    });
    cy.get('[id=sign-up-btn]').click();
    cy.visit('/musicians/new');
  });
});
