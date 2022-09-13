/// <reference types="cypress" />

describe('test about page', () => {
  beforeEach(() => {
    cy.setCookie(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdlbGEiLCJl'
    );
    cy.fixture('band').then((json) => {
      cy.intercept('GET', Cypress.env('api_server') + '/band/folksoul', {
        statusCode: 200,
        body: json.band,
      });
    });
    cy.visit('/about');
  });
  it('user can change band logo if select valid file', () => {
    cy.get('[id=band-logo-edit-btn]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('PUT', Cypress.env('api_server') + '/band/edit/logo', {
      statusCode: 200,
    });
    cy.get('[id=band-img-sent]').click();
  });
  it('user can not update logo if select invalid file', () => {
    cy.get('[id=band-logo-edit-btn]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('PUT', Cypress.env('api_server') + '/band/edit/logo', {
      statusCode: 401,
    });
    cy.get('[id=band-img-sent]').click();
    cy.get('[id=close-add-modal-btn]').click();
  });
  it('user can update band info if enter valid data', () => {
    cy.get('[id=edit-img-box]').click();
    cy.get('[id=about-band-textarea]')
      .clear()
      .type(
        'დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების'
      );
    cy.intercept('PUT', Cypress.env('api_server') + '/band/edit/description', {
      statusCode: 200,
    });
    cy.get('[id=bend-info-sent]').click();
  });
  it('if user enter invalid data errors display', () => {
    cy.get('[id=edit-img-box]').click();
    cy.get('[id=about-band-textarea]')
      .clear()
      .type(
        'დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების დაწყვილების'
      );
    cy.intercept('PUT', Cypress.env('api_server') + '/band/edit/description', {
      statusCode: 401,
    });
    cy.get('[id=bend-info-sent]').click();
  });
  it('user can log out', () => {
    cy.get('[id=logout-btn]').click();
  });
});
