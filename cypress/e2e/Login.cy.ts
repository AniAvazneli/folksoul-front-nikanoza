/// <reference types="cypress" />

describe('testing login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('if user click button firstly errors should be display', () => {
    cy.get('[id=sign-up-btn]').click();
    cy.url().should('include', 'login');
    cy.contains('მეტსახელის ველი ცარიელია');
    cy.contains('პაროლის ველი ცარიელია');
  });
  it('if user enter incorrect data error message should display', () => {
    cy.get('[id=username]').type('ნიუტონა');
    cy.get('[id=password]').type('dardubala');
    cy.intercept('POST', Cypress.env('api_server') + '/login', {
      statusCode: 401,
    });
    cy.get('[id=sign-up-btn]').click();
    cy.contains('მონაცემები არასწორია');
  });
  it('if user enter valid values should be redirected on dashboard page', () => {
    cy.get('[id=username]').type('nikanoza');
    cy.get('[id=password]').type('dardubala');
    cy.intercept('POST', Cypress.env('api_server') + '/login', {
      statusCode: 200,
      body: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdlbGEiLCJl',
      },
    });
    cy.get('[id=sign-up-btn]').click();
    cy.url().should('include', 'dashboard');
    cy.visit('/');
    cy.get('[id=login-btn]').click();
    cy.url().should('include', 'dashboard');
  });
});
