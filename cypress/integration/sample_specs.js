describe('Home Page', () => {
    it('Successfully Loads', () => {
        cy.visit("http://localhost:3000/")

        cy.contains('About').click()

        cy.url().should('include', '/about')

        cy.contains('About Us')

        cy.contains('Contact Us').click()

        cy.url().should('include', '/contact')

        cy.get('#email-id-box')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        cy.get('#subject-text-input-box')
            .type('sample subject')

        cy.get('#enter-text-here-input-box')
            .type('this is a text area')
            .should('have.value','this is a text area')

        cy.get('#confirm-submit-button').click()

        
    })
})