import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('Home Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it('renders the home container', () => {
    cy.get('.homeContainer').should('exist');
  });

  it('renders the banner section', () => {
    cy.get('.banner').should('exist');
    cy.get('.banner h1').contains('МАЙСТЕРНЯ КОНДИТЕРСЬКИХ ВИРОБІВ').should('exist');
    cy.get('.banner p').contains('Все найвишуканіше і найсмачніше').should('exist');
  });

  it('renders the cakes section', () => {
    cy.get('.cakes').should('exist');
    cy.get('.cakes h2').contains('НАШІ ТОРТИ').should('exist');
    cy.get('.cakeGallery').should('exist');
    cy.get('.cakeImage').should('have.length', 3);
    cy.get('.viewButton').should('exist');
  });

  it('navigates to catalog page when clicking the view button', () => {
    cy.get('.viewButton').click();
    cy.url().should('include', '/catalog');
  });

  it('renders the about section', () => {
    cy.get('.about').should('exist');
    cy.get('.about h2').contains('ПРО НАС').should('exist');
    cy.get('.about p').should('exist');
  });

  it('renders the advantages section', () => {
    cy.get('.advantages').should('exist');
    cy.get('.advantages h2').contains('Чому Нас обирають').should('exist');
    cy.get('.advantageGallery').should('exist');
    cy.get('.advantageItem').should('have.length', 3);
  });

  it('checks the content of each advantage', () => {
    cy.get('.advantageItem').eq(0).contains('Свіжа продукція').should('exist');
    cy.get('.advantageItem').eq(1).contains('Швидка доставка').should('exist');
    cy.get('.advantageItem').eq(2).contains('Професійні кондитери').should('exist');
  });
});
