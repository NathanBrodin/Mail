import './commands';

Cypress.Commands.add('stubLogin', () => {
  cy.intercept('api/auth/session', { fixture: 'auth-session.json' }).as(
    'session'
  );

  cy.setCookie(
    'next-auth.session-token',
    'a valid cookie from the browser session'
  );

  cy.visit('/');
  cy.wait('@session');
});
