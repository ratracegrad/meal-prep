// Returns the Vuex store.
export const getStore = () => cy.window().its('app.$store');
