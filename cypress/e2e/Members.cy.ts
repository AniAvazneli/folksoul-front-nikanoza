/// <reference types="cypress" />

describe('test band member page', () => {
  beforeEach(() => {
    cy.visit('/');
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
    cy.fixture('members').then((json) => {
      cy.intercept('GET', Cypress.env('api_server') + '/singers', {
        statusCode: 200,
        body: json.members,
      });
    });
    cy.visit('/musicians');
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
  it('if user click the camera icon image change modal should be show', () => {
    cy.get('[id=avatar-edit-btn-1]').click();
    cy.get('[id=close-add-modal-btn]').should('exist');
    cy.get('[id=close-add-modal-btn]').click();
    cy.get('[id=close-add-modal-btn]').should('not.exist');
  });
  it('user can upload avatar', () => {
    cy.get('[id=avatar-edit-btn-1]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('POST', Cypress.env('api_server') + '/singers-logos/1', {
      statusCode: 200,
      body: 'update member logo successfully',
    });
    cy.get('[id=musician-img-sent]').click();
  });
  it('if avatar did not upload error message should be show', () => {
    cy.get('[id=avatar-edit-btn-1]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('POST', Cypress.env('api_server') + '/singers-logos/1', {
      statusCode: 401,
    });
    cy.get('[id=musician-img-sent]').click();
    cy.get('[id=backdrop]')
      .trigger('mouseleft', { which: 1, pageX: 600, pageY: 100 })
      .trigger('click', 20, 30);
  });
  it('user can update avatar in select valid file', () => {
    cy.get('[id=avatar-edit-btn-2]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test.png');
    cy.intercept('PUT', Cypress.env('api_server') + '/singers-logos/edit/2', {
      statusCode: 200,
    });
    cy.get('[id=musician-img-sent]').click();
  });
  it('if avatar did not upload error message should be show', () => {
    cy.get('[id=avatar-edit-btn-2]').click();
    cy.get('[id=img-upload-btn]').click();
    cy.get('input[type="file"]').attachFile('test-big.png');
    cy.intercept('PUT', Cypress.env('api_server') + '/singers-logos/edit/2', {
      statusCode: 401,
    });
    cy.get('[id=musician-img-sent]').click();
    cy.get('[id=close-add-modal-btn]').click();
  });
  it('user can delete member', () => {
    cy.get('[id=delete-btn-2]').click();
    cy.intercept('DELETE', Cypress.env('api_server') + '/singers/delete/2', {
      statusCode: 200,
    });
    cy.get('[id=musician-del-btn]').click();
  });
});
