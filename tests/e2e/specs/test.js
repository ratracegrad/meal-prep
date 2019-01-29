/// <reference types="Cypress" />
// https://docs.cypress.io/api/introduction/api.html
/* eslint-env mocha */
/* global cy */
function generateRandomEmail() {
    const name = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5);
    return `${name}@test.com`;
}

describe('Meal Prep', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Testing Homepage', () => {
        it('Homepage loads', () => {
            cy.contains('HEALTHY MEALS');
        });

        it('has the correct title', () => {
            cy.title().should('equal', 'Meal Prep');
        });

        it('Shows all available meal plans', () => {
            cy.get('.meal-plans')
                .children()
                .should('have.length', 3);
        });
    });

    describe('Testing App Navigation', () => {
        it('Have a Menu button', () => {
            cy.get('[data-cy=menuBtn]');
        });

        it('Have a Sign In button', () => {
            cy.get('[data-cy=signinBtn]');
        });

        it('Have a Join button', () => {
            cy.get('[data-cy=joinBtn]');
        });

        it('Redirects to homepage when not logged in', () => {
            cy.visit('/about');
            cy.location('pathname').should('equal', '/sign-in');
        });

        it('Shows the about page when logged in', () => {
            cy.visit('/sign-in');
            cy.login();
            cy.location('pathname').should('equal', '/about');
        });
    });

    describe('Testing Login Page', () => {
        beforeEach(() => {
            cy.get('[data-cy=signinBtn]').click();
        });

        it('should require all fields', () => {
            cy.get('[data-cy=signinPasswordField]').type('password');
            cy.get('[data-cy=signinSubmitBtn').should('be.disabled');
        });

        it('email must be valid', () => {
            cy.get('[data-cy=signinEmailField]').type('invalid@mail');
            cy.contains('E-mail must be valid');
            cy.get('[data-cy=signinEmailField]').type('valid@mail.com');
            cy.get('.v-messages__message').should('not.exist');
        });

        it('passwords must be at least 6 characters', () => {
            cy.get('[data-cy=signinPasswordField]').type('hello');
            cy.contains('Password must be greater than 6 characters');
            cy.get('[data-cy=signinPasswordField]').type('helloworld');
            cy.get('.v-messages__message').should('not.exist');
        });

        it('should login user', () => {
            cy.get('[data-cy=signinEmailField]').type('testuser@testing.com');
            cy.get('[data-cy=signinPasswordField]').type('password');
            cy.get('[data-cy=signinSubmitBtn]').click();
            cy.location('pathname').should('equal', '/about');
            cy.logout();
            cy.location('pathname').should('equal', '/');
        });
    });

    describe('Testing Register Page', () => {
        it('Should register a new user', () => {
            cy.visit('/join');
            cy.get('[data-cy=joinEmailField]').type(generateRandomEmail());
            cy.get('[data-cy=joinPasswordField]').type('Password123');
            cy.get('[data-cy=joinSubmitBtn').click();
            cy.location('pathname').should('equal', '/about');
            cy.logout();
            cy.location('pathname').should('equal', '/');
        });
    });

    describe('Testing Showing Recipes', () => {
        it('should show Keto Recipes', () => {
            cy.visit('/menu');
            cy.get('[data-cy=recipeEntry').should('not.exist');
            cy.get('[data-cy=plansKetoBtn]').click();
            cy.get('[data-cy=recipeEntry').should('have.length.gte', 1);
        });
    });
});
