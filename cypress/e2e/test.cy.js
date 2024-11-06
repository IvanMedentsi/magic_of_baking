describe('Typing Examples Test', () => {
    beforeEach(() => {
      
      cy.visit('/'); 
    });
  
    it('navigates to and displays typing examples content', () => {
      
        cy.contains('НАШІ ТОРТИ')
  
    });
  });
  