//your code here
describe('Card Deck Test', () => {
    it('should find the card with "Alert" and have the correct background color', () => {
        // Check for the card with the "Alert" text and .bg-warning class
        cy.get(".card.bg-warning").should('exist').contains("Alert");
    });
});