describe('My first tests', () => {
  it('app is working fine!', () => {
    cy.visit('/');
  });

  it('header has App-header class', () => {
    cy.visit('/');
    cy.get('header').should('have.class', 'App-header');
  });
});
