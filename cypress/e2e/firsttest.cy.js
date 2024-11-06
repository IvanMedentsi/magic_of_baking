describe('Catalog Page Tests', () => {
  beforeEach(() => {
 
    cy.visit('/');
  
    cy.contains('Переглянути').click();
  });

  it('should navigate to the catalog page', () => {
    cy.url().should('include', '/catalog');
    cy.contains('КАТАЛОГ').should('be.visible'); 
  });

 
  it('should change the page when pagination is clicked', () => {

    cy.get('button').contains('2').click();

    cy.contains('Торт "Чорний ліс"').should('be.visible');
    cy.contains('Торт "Чізкейк "').should('not.exist'); 
  });

  it('should display products correctly on page 1', () => {
    cy.contains('Торт "Чізкейк "').should('be.visible');
    cy.contains('Торт "Естерхазі"').should('be.visible');
  });

  it('should display products correctly on page 2', () => {
    cy.get('button').contains('2').click();
    cy.contains('Торт "Чорний ліс"').should('be.visible');
    cy.contains('Торт "Празький"').should('be.visible');
  });
});
