import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { CartProvider } from './CartContext'; // Імпортуйте CartProvider
import CheckoutPage from './CheckoutPage';


describe('CheckoutPage', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <CartProvider>
         
          <CheckoutPage />
        </CartProvider>
      </MemoryRouter>
    );
  });

  it('renders the checkout container', () => {
    cy.get('.checkoutContainer').should('exist');
  });

  it('renders payer details form', () => {
    cy.get('h2').contains('Дані платника').should('exist');
    cy.get('input[name="firstName"]').should('exist');
    cy.get('input[name="lastName"]').should('exist');
    cy.get('input[name="phone"]').should('exist');
    cy.get('input[name="email"]').should('exist');
  });

  it('renders delivery address form', () => {
    cy.get('h2').contains('Адреса доставки').should('exist');
    cy.get('input[name="address"]').should('exist');
    cy.get('input[type="radio"]').should('have.length', 2);
    cy.get('label').contains('Нова Пошта').should('exist');
    cy.get('label').contains('Укр Пошта').should('exist');
  });

  it('displays cart items and total', () => {
    cy.get('h2').contains('Ваші товари').should('exist');
    cy.get('ul').children().should('have.length.greaterThan', 0); // Перевіряємо, що в кошику є товари
    cy.get('p').contains('До оплати:').should('exist');
  });

  it('submits the form successfully', () => {
    // Заповнюємо форму
    cy.get('input[name="firstName"]').type('Іван');
    cy.get('input[name="lastName"]').type('Іванов');
    cy.get('input[name="phone"]').type('0123456789');
    cy.get('input[name="email"]').type('ivan@example.com');
    cy.get('input[name="address"]').type('Вулиця, 1');
    cy.get('input[type="radio"][value="nova"]').check(); // Вибираємо "Нова Пошта"
    
    // Відправляємо форму
    cy.get('button').contains('Оформити').click();
    
    // Перевірка, чи з'явилося повідомлення про успішну реєстрацію або інша реакція
    cy.get('.success-message').should('exist'); // Приклад повідомлення, ви можете адаптувати під ваш код
  });

  it('shows an error message when there is an error', () => {
    // Симуляція помилки при відправці
    cy.intercept('POST', '**/createOrder', {
      statusCode: 400,
      body: { error: 'Помилка при оформленні замовлення' },
    });

    // Заповнюємо форму
    cy.get('input[name="firstName"]').type('Іван');
    cy.get('input[name="lastName"]').type('Іванов');
    cy.get('input[name="phone"]').type('0123456789');
    cy.get('input[name="email"]').type('ivan@example.com');
    cy.get('input[name="address"]').type('Вулиця, 1');
    cy.get('input[type="radio"][value="nova"]').check(); // Вибираємо "Нова Пошта"

    // Відправляємо форму
    cy.get('button').contains('Оформити').click();

    // Перевірка, що з'явилося повідомлення про помилку
    cy.get('.error').contains('Помилка при оформленні замовлення').should('exist');
  });
});
