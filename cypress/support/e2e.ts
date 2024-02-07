import './commands';

Cypress.Commands.add('stubLogin', () => {
  cy.intercept('api/auth/session', { fixture: 'auth-session.json' }).as(
    'session'
  );

  cy.setCookie('next-auth.session-token', Cypress.env('AUTH_COOKIE'));

  cy.visit('/');
  cy.wait('@session');
});
