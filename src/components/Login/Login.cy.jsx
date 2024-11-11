import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Login from './Login';

describe('Login Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it('renders the login container', () => {
    cy.get('.registerContainer').should('exist');
  });

  it('renders the login title', () => {
    cy.get('.pageTitle').contains('Вхід').should('exist');
  });

  it('renders input fields and button', () => {
    cy.get('.inputField').should('have.length', 2);
    cy.get('.inputField').eq(0).should('have.attr', 'placeholder', 'Please enter your email');
    cy.get('.inputField').eq(1).should('have.attr', 'placeholder', 'Please enter your password');
    cy.get('.submitButton').contains('Увійти').should('exist');
  });

  it('displays an error message if login fails', () => {
    cy.intercept('POST', '**/signInWithEmailAndPassword', {
      statusCode: 401,
      body: { error: 'User not found' },
    }).as('signIn');

    cy.get('.inputField').eq(0).type('wrongemail@example.com');
    cy.get('.inputField').eq(1).type('wrongpassword');
    cy.get('.submitButton').click();
    
    cy.wait('@signIn');
    
    cy.get('p').should('contain', 'Вибачте, не можемо знайти ваш обліковий запис');
  });

  it('navigates to register page when clicking the register link', () => {
    cy.get('p').contains('Зареєструватися').click();
    cy.url().should('include', '/register');
  });

  it('clears input fields after successful login', () => {
    cy.intercept('POST', '**/signInWithEmailAndPassword', {
      statusCode: 200,
      body: { user: { uid: '12345' } },
    }).as('signInSuccess');

    cy.get('.inputField').eq(0).type('testemail@example.com');
    cy.get('.inputField').eq(1).type('testpassword');
    cy.get('.submitButton').click();
    
    cy.wait('@signInSuccess');

    cy.get('.inputField').eq(0).should('have.value', '');
    cy.get('.inputField').eq(1).should('have.value', '');
  });
});
