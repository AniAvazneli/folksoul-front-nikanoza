/// <reference types="cypress" />

describe('test links page', () => {
  beforeEach(() => {
    cy.setCookie(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdlbGEiLCJl'
    );
    cy.visit('/musicians');
  });
  it('if user click add new social link button should redirected new link page', () => {
    cy.get('[id=add-links-btn]').click();
    
  });
});
