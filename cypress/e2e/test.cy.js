describe('Typing Examples Test', () => {
    beforeEach(() => {
      
      cy.visit('/'); 
    });
  
    it('navigates to and displays typing examples content', () => {
      
        cy.contains('НАШІ')
  
    });
    it('should display all images correctly', () => {

      cy.get('img[src*="Cake1.jpg"]').should('be.visible');
      cy.get('img[src*="Cake2.jpg"]').should('be.visible');
      cy.get('img[src*="Cake3.jpg"]').should('be.visible');
  
      cy.get('img[src*="delivery.png"]').should('be.visible');
      cy.get('img[src*="prod.png"]').should('be.visible');
      cy.get('img[src*="profes.png"]').should('be.visible');
    });
  
    it('should have correct alt text for images', () => {

      cy.get('img[src*="Cake1.jpg"]').should('have.attr', 'alt', 'Торт');
      cy.get('img[src*="Cake2.jpg"]').should('have.attr', 'alt', 'Торт');
      cy.get('img[src*="Cake3.jpg"]').should('have.attr', 'alt', 'Торт');
  
      cy.get('img[src*="delivery.png"]').should('have.attr', 'alt', 'Швидка доставка');
      cy.get('img[src*="prod.png"]').should('have.attr', 'alt', 'Свіжа продукція');
      cy.get('img[src*="profes.png"]').should('have.attr', 'alt', 'Професійні кондитери');
    });
  });
  
  