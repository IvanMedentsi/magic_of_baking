import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import PaymentDelivery from './PaymentDelivery';

describe('PaymentDelivery Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <PaymentDelivery />
      </MemoryRouter>
    );
  });


  it('renders payment conditions list', () => {
    cy.get('ul').first().find('li').should('have.length', 5);
    cy.get('ul').first().contains('Спосіб оплати: карткою, готівкою при отриманні.').should('exist');
  });

  it('renders payment image', () => {
    cy.get('img[alt="Умови оплати"]').should('exist');
  });

  it('renders delivery conditions header', () => {
    cy.get('h2').last().contains('Умови доставки:').should('exist');
  });

  it('renders delivery conditions list', () => {
    cy.get('ul').last().find('li').should('have.length', 5);
    cy.get('ul').last().contains('Курєрська доставка: від 50 гривень в окремих містах (за запитом).').should('exist');
  });

  it('renders delivery image', () => {
    cy.get('img[alt="Умови доставки"]').should('exist');
  });
});
