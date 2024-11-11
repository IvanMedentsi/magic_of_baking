import React from 'react';

import Catalog from './Catalog';

describe('Catalog Component', () => {
  beforeEach(() => {
    cy.mount(<Catalog />);
  });

  it('renders catalog title correctly', () => {
    cy.get('h2.catalogTitle').should('contain', 'КАТАЛОГ');
  });

  it('renders products from the first page', () => {
    cy.get('.productItem').should('have.length', 9);
  });

  it('renders product details correctly', () => {
    cy.get('.productItem').first().within(() => {
      cy.get('img.productImage').should('exist');
      cy.get('h3.productName').should('contain', 'Торт "Чізкейк "');
      cy.get('p.productPrice').should('contain', '770 грн');
      cy.get('p.productWeight').should('contain', '900 г');
    });
  });

  it('adds product to cart when button is clicked', () => {
    cy.get('.productItem').first().within(() => {
      cy.get('button.cartButton').click();
    });
    // Перевірте, що товар було додано до кошика
    // Це залежить від реалізації вашого useCart
    cy.window().its('localStorage.cart').should('exist'); // Якщо ви зберігаєте в локальному сховищі
  });

  it('changes pages correctly', () => {
    // Перевірка, що перша сторінка відображає продукти
    cy.get('.productItem').should('have.length', 9);
    cy.get('button').contains('2').click();
    // Перевірка, що друга сторінка відображає продукти
    cy.get('.productItem').should('have.length', 9);
  });
});
