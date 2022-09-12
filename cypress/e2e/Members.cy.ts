/// <reference types="cypress" />

describe('test band member page', () => {
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
    cy.visit('/musicians');
    cy.fixture('members').then((json) => {
      cy.intercept('GET', Cypress.env('api_server') + '/singers', {
        statusCode: 200,
        body: json.members,
      });
    });
  });
  it('check if pagination buttons works correctly', () => {
    cy.get('[id=pagination-3]').click();
    cy.contains('ასტარტა');
  });
  it('if user click the add new member button should be navigate to new musician page', () => {
    cy.get('[id=add-new-member-btn]').click();
    cy.url().should('include', '/musicians/new');
  });
  it('if user click green member button show member detail modal', () => {
    cy.get('[id=detail-btn-1]').click();
    cy.contains('სიმპსონოვიჩი ~ გიტარა');
    cy.get('[id=close-add-modal-btn]').click();
    cy.get('[id=close-add-modal-btn]').should('not.exist');
  });
  it('if user click the yellow member button then redirected to member edit page', () => {
    cy.get('[id=edit-btn-1]').click();
    cy.url().should('include', '/edit');
  });
  it('if user click the red member button then member delete modal should be show', () => {
    cy.get('[id=delete-btn-1]').click();
    cy.get('[id=close-add-modal-btn]').should('exist');
    cy.get('[id=close-add-modal-btn]').click();
    cy.get('[id=close-add-modal-btn]').should('not.exist');
  });
  it('if user click the camera icon image change modal should be show', () =>
    () => {
      cy.get('[id=avatar-edit-btn-1]').click();
      cy.get('[id=close-add-modal-btn]').should('exist');
      cy.get('[id=close-add-modal-btn]').click();
      cy.get('[id=close-add-modal-btn]').should('not.exist');
    });
});
