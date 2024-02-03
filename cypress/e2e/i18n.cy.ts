describe('Internationalization Routing initial route testing', () => {
  it('Default language should be English', () => {
    cy.visit('/');

    cy.url().should('not.include', '/en');
    cy.url().should('not.include', '/fr');
  });

  it('Should change language to French', () => {
    cy.visit('/fr');
    cy.url().should('include', '/fr');
  });

  it('Should change language to English', () => {
    cy.visit('/en');
    cy.url().should('include', '/en');
  });

  it('Should change language to Norwegian', () => {
    cy.visit('/no');
    cy.url().should('include', '/no');
  });

  it('Should change language to Swedish', () => {
    cy.visit('/sv');
    cy.url().should('include', '/sv');
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
