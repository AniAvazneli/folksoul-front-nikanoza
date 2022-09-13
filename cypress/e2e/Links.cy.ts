/// <reference types="cypress" />

describe('test links page', () => {
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
    cy.visit('/links');
  });
  it('if user click add new social link button should redirected new link page', () => {
    cy.get('[id=add-links-btn]').click();
    cy.url().should('include', '/links/new');
  });
  it('user can change social link logo', () => {
    cy.get('[id=image-change-box-1]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('PUT', Cypress.env('api_server') + '/links-logos/edit/1', {
      statusCode: 200,
    });
    cy.get('[id=link-img-sent]').click();
  });
  it('if user select invalid file error message should be display', () => {
    cy.get('[id=image-change-box-1]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('PUT', Cypress.env('api_server') + '/links-logos/edit/1', {
      statusCode: 401,
    });
    cy.get('[id=link-img-sent]').click();
    cy.get('[id=close-add-modal-btn]').click();
  });
  it('user can add logo on social link', () => {
    cy.get('[id=image-change-box-3]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('POST', Cypress.env('api_server') + '/links-logos/3', {
      statusCode: 200,
    });
    cy.get('[id=link-img-sent]').click();
  });
  it('user can not add logo to social link if select invalid file', () => {
    cy.get('[id=image-change-box-3]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('POST', Cypress.env('api_server') + '/links-logos/3', {
      statusCode: 401,
    });
    cy.get('[id=link-img-sent]').click();
  });
  it('if user click social link yellow button redirected edit page', () => {
    cy.get('[id=edit-btn-1]').click();
    cy.url().should('include', '/links/edit');
  });
  it('user can delete social link', () => {
    cy.get('[id=delete-btn-1]').click();
    cy.intercept('DELETE', Cypress.env('api_server') + '/links/delete/1', {
      statusCode: 200,
    });
    cy.get('[id=link-del-btn]').click();
  });
  it('user can close delete link modal', () => {
    cy.get('[id=delete-btn-1]').click();
    cy.get('[id=close-add-modal-btn]').click();
  });
});
