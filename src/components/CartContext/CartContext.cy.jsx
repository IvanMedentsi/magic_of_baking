import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { CartProvider } from './CartContext';


describe('CartProvider', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <CartProvider>
         
        </CartProvider>
      </MemoryRouter>
    );
  });

  it('renders the cart component', () => {
    cy.get('div[data-testid="cart-items"]').should('exist');
  });

  it('adds an item to the cart', () => {
    cy.get('button').contains('Додати товар').click();
    cy.get('div[data-testid="cart-items"]').should('not.be.empty');
    cy.get('p').contains('Загальна сума: 100').should('exist'); 
  });

  it('removes an item from the cart', () => {
    cy.get('button').contains('Додати товар').click();
    cy.get('button').contains('Видалити товар').click();
    cy.get('div[data-testid="cart-items"]').contains('[]').should('exist'); 
    cy.get('p').contains('Загальна сума: 0').should('exist');
  });

  it('calculates the total correctly', () => {
    cy.get('button').contains('Додати товар').click();
    cy.get('button').contains('Додати товар').click(); 
    cy.get('p').contains('Загальна сума: 100').should('exist'); 
  });
});
