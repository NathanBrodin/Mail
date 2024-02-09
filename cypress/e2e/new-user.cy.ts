describe('New User experience', () => {
  it('Should display the correct user name', () => {
    cy.stubLogin();

    cy.visit('/new-user');

    cy.get('[data-cy=new-user-name]').should('contain.text', 'Nathan Brodin');
  });
});
