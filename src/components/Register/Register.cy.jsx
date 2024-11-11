import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Register from './Register';

describe('Register Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
  });


  it('renders registration header', () => {
    cy.get('h2').contains('Реєстрація').should('exist');
  });

  it('renders email input field', () => {
    cy.get('input[type="email"]').should('exist');
  });

  it('renders password input field', () => {
    cy.get('input[type="password"]').first().should('exist');
  });

  it('renders copy password input field', () => {
    cy.get('input[type="password"]').last().should('exist');
  });

  it('renders create button', () => {
    cy.get('button').contains('Створити').should('exist');
  });

  it('shows error when passwords do not match', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').first().type('password1');
    cy.get('input[type="password"]').last().type('password2');
    cy.get('button').contains('Створити').click();
    cy.get('p').contains("Passwords didn't match").should('exist');
  });

  it('shows error on registration failure', () => {
    // Симуляція помилки при створенні користувача
    cy.intercept('POST', '**/createUserWithEmailAndPassword', {
      statusCode: 400,
      body: { message: 'Помилка при створенні облікового запису' },
    });
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').first().type('password1');
    cy.get('input[type="password"]').last().type('password1');
    cy.get('button').contains('Створити').click();
    cy.get('p').contains("Помилка при створенні облікового запису").should('exist');
  });
});
  