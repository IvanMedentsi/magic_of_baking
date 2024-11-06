describe('Footer Component', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
  
    it('should render the footer correctly', () => {

      cy.get('footer').should('exist');
    });
  
    it('should render company info section', () => {
      cy.get('h3').contains('Про компанію').should('exist');
     
      cy.get('ul').contains('Каталог').should('exist');
      cy.get('ul').contains('Оплата та доставка').should('exist');
      cy.get('ul').contains('Контакти').should('exist');
    });
  
    it('should render products info section', () => {
    
      cy.get('h3').contains('Продукція').should('exist');
      
      cy.get('ul').contains('Торти').should('exist');
    });
  
    it('should render address info section', () => {
     
      cy.get('h3').contains('Адреса').should('exist');
      
      cy.get('p').contains('м.Мукачево, вул.Миру,2').should('exist');
    });
  
    it('should render contact info section', () => {
      
      cy.get('h3').contains('Контакти').should('exist');
     
      cy.get('a[href="https://facebook.com"]').should('contain', 'Facebook');
      cy.get('a[href="https://tiktok.com"]').should('contain', 'TikTok');
      cy.get('a[href="https://instagram.com"]').should('contain', 'Instagram');
    });
  
    it('should navigate to the "Каталог" page when clicked', () => {
    
      cy.get('a').contains('Каталог').click();
      cy.url().should('include', '/catalog'); 
  
    it('should navigate to the "Оплата та доставка" page when clicked', () => {
      
      cy.get('a').contains('Оплата та доставка').click();
      cy.url().should('include', '/payment-delivery'); 
    });
  
    it('should navigate to the "Контакти" page when clicked', () => {
  
      cy.get('a').contains('Контакти').click();
      cy.url().should('include', '/contacts'); 
    });
  
    it('should open Facebook page when clicked on the Facebook link', () => {
   
      cy.get('a[href="https://facebook.com"]').should('have.attr', 'href', 'https://facebook.com');
    });
  
    it('should open TikTok page when clicked on the TikTok link', () => {
   
      cy.get('a[href="https://tiktok.com"]').should('have.attr', 'href', 'https://tiktok.com');
    });
  
    it('should open Instagram page when clicked on the Instagram link', () => {
      
      cy.get('a[href="https://instagram.com"]').should('have.attr', 'href', 'https://instagram.com');
    });
  });
}); 