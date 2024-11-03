import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { CartContext } from '../CartContext/CartContext';
import Header from './Header';

describe('Header Component', () => {
  const cartItemsMock = [
    { uniqueId: '1', name: 'Торт Шоколадний', price: 200, quantity: 1, image: 'path/to/image1.jpg' },
    { uniqueId: '2', name: 'Торт Ванільний', price: 250, quantity: 2, image: 'path/to/image2.jpg' },
  ];

  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <CartContext.Provider value={{ cartItems: cartItemsMock, removeFromCart: cy.stub() }}>
          <Header />
        </CartContext.Provider>
      </MemoryRouter>
    );
  });

  it('renders the header correctly', () => {
    cy.get('header').should('exist');
    cy.get('.logotype').should('exist');
    cy.get('h1').contains('Магія').should('exist');
  });

  it('renders navigation links', () => {
    cy.get('nav').should('exist');
    cy.get('ul').contains('Каталог').should('exist');
    cy.get('ul').contains('Оплата та доставка').should('exist');
    cy.get('ul').contains('Контакти').should('exist');
    cy.get('ul').contains('Логін/Реєстрація').should('exist');
  });

  it('displays the cart button with item count', () => {
    cy.get('.basketButton').contains('Кошик (2)').should('exist');
  });

  it('opens the basket when the cart button is clicked', () => {
    cy.get('.basketButton').click();
    cy.get('.basketContainer').should('exist');
  });

  it('displays cart items when the basket is open', () => {
    cy.get('.basketButton').click();
    cy.get('.basketItem').should('have.length', cartItemsMock.length);
    cy.get('.itemName').contains('Торт Шоколадний').should('exist');
    cy.get('.price').contains('200 грн').should('exist');
  });

  it('displays total price in the order summary', () => {
    cy.get('.basketButton').click();
    cy.get('.orderSummary').contains('Разом: 700 грн').should('exist'); // 200 + 2*250
  });

  it('removes an item from the cart when the remove button is clicked', () => {
    const removeFromCartStub = cy.stub();
    cy.mount(
      <MemoryRouter>
        <CartContext.Provider value={{ cartItems: cartItemsMock, removeFromCart: removeFromCartStub }}>
          <Header />
        </CartContext.Provider>
      </MemoryRouter>
    );

    cy.get('.basketButton').click();
    cy.get('.removeItem').first().click();
    expect(removeFromCartStub).to.be.calledWith(cartItemsMock[0].uniqueId);
  });
});
