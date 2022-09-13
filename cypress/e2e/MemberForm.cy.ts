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
    cy.fixture('members').then((json) => {
      cy.intercept('GET', Cypress.env('api_server') + '/singers', {
        statusCode: 200,
        body: json.members,
      });
    });
    cy.get('[id=sign-up-btn]').click();
    cy.visit('/musicians/new');
  });

  it('if user enter incorrect data errors should be display', () => {
    cy.get('[id=new-musician-name]').type('ნიუტონა');
    cy.get('[id=new-musician-instrument]').type('ნიუტონა');
    cy.get('[id=new-musician-orbit]').type('250');
    cy.get('[id=new-musician-color]').type('#FFFFFF');
    cy.get('[id=new-musician-biography]').type(
      'ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა'
    );
    cy.intercept('POST', Cypress.env('api_server') + '/singer/new', (req) => {
      return {
        response: {
          data: [
            {
              message: 'მუსიკოსი ამ მეტსახელით უკვე არსებობს',
              path: ['name'],
              type: 'custom',
              context: {
                label: 'name',
                value: 'სიმპსონოვიჩი',
                key: 'name',
              },
            },
          ],
        },
      };
    });
    cy.get('[id=add-musician-btn]').click();
  });
  it('if user first click the button errors should be display', () => {
    cy.get('[id=add-musician-btn]').click();
    cy.contains('სახელის ველი არ უნდა იყოს ცარიელი');
  });
  it('if it is edit page values already entered ad click the button can update member', () => {
    cy.visit('/musicians/edit/1');
    cy.intercept('PUT', Cypress.env('api_server') + '/singers/edit/1', {
      statusCode: 200,
    });
    cy.get('[id=new-musician-name]').clear().type('ნიუტონა');
    cy.get('[id=new-musician-instrument]').clear().type('ნიუტონა');
    cy.get('[id=new-musician-orbit]').clear().type('250');
    cy.get('[id=new-musician-color]').clear().type('#FFFFFF');
    cy.get('[id=new-musician-biography]')
      .clear()
      .type(
        'ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა'
      );
    cy.get('[id=add-musician-btn]').click();
    // cy.url().should('not.include', '/edit');
  });
  it('on the edit page if data is invalid is incorrect error should be display', () => {
    cy.visit('/musicians/edit/1');
    cy.intercept('PUT', Cypress.env('api_server') + '/singer/edit/1', {
      statusCode: 422,
    });
    cy.get('[id=add-musician-btn]').click();
    cy.url().should('include', '/edit');
  });
  it('on the edit page if data is incorrect error should be display', () => {
    cy.visit('/musicians/edit/1');
    cy.intercept(
      'PUT',
      Cypress.env('api_server') + '/singers/edit/1',
      (req) => {
        return {
          response: {
            data: [
              {
                message: 'მუსიკოსი ამ მეტსახელით უკვე არსებობს',
                path: ['name'],
                type: 'custom',
                context: {
                  label: 'name',
                  value: 'სიმპსონოვიჩი',
                  key: 'name',
                },
              },
            ],
          },
        };
      }
    );
    cy.get('[id=new-musician-name]').clear().type('ასტარტა');
    cy.get('[id=new-musician-instrument]').clear().type('ნიუტონა');
    cy.get('[id=new-musician-orbit]').clear().type('250');
    cy.get('[id=new-musician-color]').clear().type('#FFFFFF');
    cy.get('[id=new-musician-biography]')
      .clear()
      .type(
        'ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა'
      );
    cy.get('[id=add-musician-btn]').click();
    cy.url().should('include', '/edit');
  });
  it('if user enter valid data new member crated', () => {
    cy.get('[id=new-musician-name]').type('ნიუტონა');
    cy.get('[id=new-musician-instrument]').type('ნიუტონა');
    cy.get('[id=new-musician-orbit]').type('250');
    cy.get('[id=new-musician-color]').type('#FFFFFF');
    cy.get('[id=new-musician-biography]').type(
      'ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა ნიუტონა'
    );
    cy.intercept('POST', Cypress.env('api_server') + '/singer/new', {
      statusCode: 200,
    });
    cy.get('[id=add-musician-btn]').click();
    cy.url().should('not.include', '/new');
  });
});
