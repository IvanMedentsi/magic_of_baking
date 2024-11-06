describe('Typing Examples Test', () => {
  beforeEach(() => {
   
    cy.visit('/');
  });

  it('navigates to and displays typing examples content', () => {

    cy.contains('НАШІ ТОРТИ');
  });

  it('clicks the "Переглянути" button and navigates to the catalog page', () => {

    cy.get('button').contains('Переглянути').should('be.visible');

    cy.get('button').contains('Переглянути').click();

    cy.url().should('include', '/catalog');
  });
});
