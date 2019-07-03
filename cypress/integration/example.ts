beforeEach(() => {
  cy.visit('https://google.com');
});

describe('example', () => {
  it('should pass', () => {
    cy.wrap(1 + 1).should('equal', 2);
  });
});
