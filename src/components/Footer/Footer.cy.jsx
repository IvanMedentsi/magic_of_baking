import React from 'react';

import Footer from './Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  it('renders the footer correctly', () => {
    cy.get('footer').should('exist');
  });

  it('renders company info section', () => {
    cy.get('h3').contains('Про компанію').should('exist');
    cy.get('ul').contains('Каталог').should('exist');
    cy.get('ul').contains('Оплата та доставка').should('exist');
    cy.get('ul').contains('Контакти').should('exist');
  });

  it('renders products info section', () => {
    cy.get('h3').contains('Продукція').should('exist');
    cy.get('ul').contains('Торти').should('exist');
  });

  it('renders address section', () => {
    cy.get('h3').contains('Адреса').should('exist');
    cy.get('p').contains('м.Мукачево, вул.Миру,2').should('exist');
  });

  it('renders contact info section', () => {
    cy.get('h3').contains('Контакти').should('exist');
    cy.get('a[href="https://facebook.com"]').should('contain', 'Facebook');
    cy.get('a[href="https://tiktok.com"]').should('contain', 'TikTok');
    cy.get('a[href="https://instagram.com"]').should('contain', 'Instagram');
  });
});
