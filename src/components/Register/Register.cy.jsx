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

  it('renders the registration container', () => {
    cy.get('.loginContainer').should('exist');
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
    cy.get('button').click();
    cy.get('p').contains("Passwords didn't match").should('exist');
  });

  it('shows error on registration failure', () => {
    // Mock the createUserWithEmailAndPassword function to simulate an error
    cy.intercept('POST', '**/createUserWithEmailAndPassword', { statusCode: 400 });
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').first().type('password1');
    cy.get('input[type="password"]').last().type('password1');
    cy.get('button').click();
    cy.get('p').contains("Помилка при створенні облікового запису").should('exist');
  });

  it('navigates to login page', () => {
    cy.get('a').contains('Увійти').click();
    cy.url().should('include', '/login');
  });
});
