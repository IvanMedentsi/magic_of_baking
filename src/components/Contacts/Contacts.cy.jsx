import React from 'react';

import Contacts from './Contacts';

describe('Contacts Component', () => {
  beforeEach(() => {
    cy.mount(<Contacts />);
  });

  it('renders contacts title correctly', () => {
    cy.get('h2.title').should('contain', 'КОНТАКТИ');
  });

  it('renders phone numbers', () => {
    cy.get('h3').contains('Наші телефони:').should('exist');
    cy.get('a[href="tel:0994924364"]').should('contain', '099-492-43-64');
    cy.get('a[href="tel:0856434132"]').should('contain', '085-643-41-32');
  });

  it('renders working hours', () => {
    cy.get('h3').contains('Графік роботи (прийом та обробка заявок)').should('exist');
    cy.get('p').contains('Будні дні (пн. - пт.) з 10:00 до 18:00').should('exist');
    cy.get('p').contains('Вихідні дні (сб. - нд.) не працюємо').should('exist');
  });

  it('renders social media links', () => {
    cy.get('h3').contains('Звертатися по питанням').should('exist');
    cy.get('a[href="https://facebook.com"]').should('contain', 'Наш Facebook');
    cy.get('a[href="https://tiktok.com"]').should('contain', 'Наш TikTok');
    cy.get('a[href="https://instagram.com"]').should('contain', 'Наш Instagram');
    cy.get('a[href="mailto:magicofbaking@gmail.com"]').should('contain', 'Наша пошта magicofbaking@gmail.com');
  });

  it('renders addresses and mobile numbers', () => {
    cy.get('h3').contains('Адреси:').should('exist');
    cy.get('p').contains('Україна, Закарпатська область, м.Мукачево, вул.Достоєвського,2').should('exist');
    cy.get('a[href="tel:0954861097"]').should('contain', '095 48 61 097');
    cy.get('p').contains('Україна, Закарпатська область, м.Мукачево, вул.Федорова,5').should('exist');
    cy.get('a[href="tel:050436165"]').should('contain', '050 43 61 65');
    cy.get('p').contains('Україна, Закарпатська область, м.Мукачево, вул.Недецеї,39').should('exist');
    cy.get('a[href="tel:099533276"]').should('contain', '099 53 32 76');
  });
});
