/// <reference types="cypress" />

describe('test link form', () => {
  beforeEach(() => {
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
  });
  it('if user click add link page firstly errors display', () => {
    cy.visit('/links/new');
    cy.get('[id=add-link-btn]').click();
  });
  it('if user enter incorrect data error display', () => {
    cy.visit('/links/new');
    cy.get('[id=link-form-name]').type('F1');
    cy.get('[id=link-form-link]').type('https://www.formula1.com');
    cy.intercept('POST', Cypress.env('api_server') + '/links/new', {
      statusCode: 401,
    });
    cy.get('[id=add-link-btn]').click();
  });
  it('if user enter valid data new link added', () => {
    cy.visit('/links/new');
    cy.get('[id=link-form-name]').type('f1');
    cy.get('[id=link-form-link]').type('https://www.formula1.com');
    cy.intercept('POST', Cypress.env('api_server') + '/links/new', {
      statusCode: 200,
    });
    cy.get('[id=add-link-btn]').click();
  });
  it('user can not update link if data is invalid', () => {
    cy.visit('/links/edit/1');
    cy.get('[id=link-form-name]').clear().type('Deno');
    cy.get('[id=link-form-link]').clear().type('https://www.formula1.com');
    cy.intercept('PUT', Cypress.env('api_server') + '/links/edit/1', {
      statusCode: 401,
    });
    cy.get('[id=add-link-btn]').click();
  });
  it('user can update link if data is valid', () => {
    cy.visit('/links/edit/1');
    cy.get('[id=link-form-name]').clear().type('Deno');
    cy.get('[id=link-form-link]').clear().type('https://www.formula1.com');
    cy.intercept('PUT', Cypress.env('api_server') + '/links/edit/1', {
      statusCode: 200,
    });
    cy.get('[id=add-link-btn]').click();
  });
  it('user can bak to links page', () => {
    cy.visit('/links/edit/1');
    cy.get('[id=back-links-btn]').click();
    cy.url().should('not.include', 'edit');
  });
});
