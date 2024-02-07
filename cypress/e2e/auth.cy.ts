describe('User can acces login', () => {
  it('Unauthenticated user should be redirected to discover', () => {
    cy.visit('/');
    cy.url().should('include', '/discover');
  });

  it.only('Unauthenticated user should be able to go to the login page via get started button', () => {
    cy.visit('/');

    cy.get('[data-cy="get-started-button"]').click();
    cy.url().should('include', '/auth/signin');
  });

  it('Unauthenticated user should be able to go to the login page via sign in button on large screens', () => {
    cy.viewport(1024, 768);
    cy.visit('/discover');

    cy.get('[data-cy="sign-in-button"]').click();
    cy.url().should('include', '/auth/signin');
  });

  it('Unauthenticated user should be able to go to the login page via sign in button on small screens', () => {
    cy.viewport('iphone-8');
    cy.visit('/discover');

    cy.get('[data-cy="open-menu-button"]').click();
    cy.get('[data-cy="sign-in-button-mobile"]').click();
    cy.url().should('include', '/auth/signin');
  });
});
