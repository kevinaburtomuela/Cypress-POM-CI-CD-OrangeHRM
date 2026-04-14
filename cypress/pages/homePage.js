class HomePage {


    visit() {
        cy.visit('/web/index.php/dashboard/index')
}
    ValidateHomePage(){
        cy.url().should('include', 'dashboard')
        cy.contains('h6', 'Dashboard').should('be.visible')
    }
    SelectDirectoryMenu(){
        cy.contains('span', 'Directory').click() 
    }

    SelectClaimMenu(){
        cy.contains('span', 'Claim').click() 
    }
}

export default new HomePage()