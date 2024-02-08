describe('Internationalization Routing initial route testing', () => {
  it('Default language should be English', () => {
    cy.visit('/');

    cy.url().should('not.include', '/en');
    cy.url().should('not.include', '/fr');
  });

  it('Should redirect to French', () => {
    // Pass an Accept-Language header in 'fr' to simulate a French user
    cy.visit('/', {
      headers: {
        'Accept-Language': 'fr',
      },
    });

    cy.url().should('include', '/fr');
  });

  it('Should redirect to Norwegian', () => {
    // Pass an Accept-Language header in 'no' to simulate a Norwegian user
    cy.visit('/', {
      headers: {
        'Accept-Language': 'no',
      },
    });

    cy.url().should('include', '/no');
  });

  it('Should redirect to Swedish', () => {
    // Pass an Accept-Language header in 'sv' to simulate a Swedish user
    cy.visit('/', {
      headers: {
        'Accept-Language': 'sv',
      },
    });

    cy.url().should('include', '/sv');
  });

  it('Should redirect to default language', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'es',
      },
    });

    cy.url().should('include', '/');
  });
});

describe('Internationalization Routing nested route testing', () => {
  it('Default language should be English', () => {
    cy.visit('/discover');

    cy.url().should('not.include', '/en');
    cy.url().should('not.include', '/fr');
  });

  it('Should change language to French', () => {
    cy.visit('/fr/discover');
    cy.url().should('include', '/fr');
  });

  it('Should change language to English', () => {
    cy.visit('/en/discover');
    cy.url().should('include', '/en');
  });

  it('Should change language to Norwegian', () => {
    cy.visit('/no/discover');
    cy.url().should('include', '/no');
  });

  it('Should change language to Swedish', () => {
    cy.visit('/sv/discover');
    cy.url().should('include', '/sv');
  });

  it('Should redirect to French', () => {
    // Pass an Accept-Language header in 'fr' to simulate a French user
    cy.visit('/discover', {
      headers: {
        'Accept-Language': 'fr',
      },
    });

    cy.url().should('include', '/fr');
  });

  it('Should redirect to Norwegian', () => {
    // Pass an Accept-Language header in 'no' to simulate a Norwegian user
    cy.visit('/discover', {
      headers: {
        'Accept-Language': 'no',
      },
    });

    cy.url().should('include', '/no');
  });

  it('Should redirect to Swedish', () => {
    // Pass an Accept-Language header in 'sv' to simulate a Swedish user
    cy.visit('/discover', {
      headers: {
        'Accept-Language': 'sv',
      },
    });

    cy.url().should('include', '/sv');
  });
});

describe('Internationalization link persistence', () => {
  it('Should persist the language when navigating to a new page with default language', () => {
    cy.visit('/discover');

    cy.get('[data-cy="get-started-button"]').click();
    cy.url().should('include', '/auth/signin');
  });

  it('Should persist the language when navigating to a new page with french language', () => {
    cy.visit('/fr/discover');

    cy.get('[data-cy="get-started-button"]').click();
    cy.url().should('include', '/fr/auth/signin');
  });

  it('Should persist the language when navigating to a new page with norwegian language', () => {
    cy.visit('/no/discover');

    cy.get('[data-cy="get-started-button"]').click();
    cy.url().should('include', '/no/auth/signin');
  });

  it('Should redirect to Swedish', () => {
    cy.visit('/discover', {
      headers: {
        'Accept-Language': 'sv',
      },
    });
    cy.url().should('include', '/sv');

    cy.get('[data-cy="get-started-button"]').click();
    cy.url().should('include', '/sv/auth/signin');
  });
});
