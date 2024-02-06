export {};
declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Cypress {
    interface Chainable {
      /** Yields elements with a data-cy attribute that matches a specified selector.
       * ```
       * cy.getByCy('search-toggle') // where the selector is [data-cy="search-toggle"]
       * ```
       */

      /**
       * Logs-in user by using Google API request
       */
      googleLogin(): Chainable<Response>;

      /**
       * Stubs login via fixture, to get past the auth wall
       */
      stubLogin(): void;
    }
  }
}
