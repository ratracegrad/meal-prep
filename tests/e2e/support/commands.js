// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { getStore } from './utils';

Cypress.Commands.add(
    'login',
    ({ email = 'testuser@testing.com', password = 'password' } = {}) => {
        // Manually log the user in
        cy.location('pathname').then(pathname => {
            if (pathname === 'blank') {
                cy.visit('/');
            }
        });
        getStore().then(store => {
            cy.log(
                `calling store userLogin with email: ${email} password: ${password}`
            );
            store.dispatch('userLogin', { email, password });
        });
    }
);

Cypress.Commands.add('logout', () => {
    getStore().then(store => {
        cy.log('calling store userSignOut');
        store.dispatch('userSignOut');
    });
});
