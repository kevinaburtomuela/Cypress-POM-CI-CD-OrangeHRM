import { myClaimSelector } from '../selectors/myClaimSelector'

class MyClaimPage {

    GoMyClaim(){
        cy.contains('My Claim').click()
    }

    ValidateClaimStatus(noteText, status) {
        cy.contains(myClaimSelector.recordFound, noteText).closest('.oxd-table-row').should('contain', status)
    }

    ValidateClaimNotExist(noteText) {
        cy.contains(myClaimSelector.recordFound, noteText).should('not.exist')
    }

}

export default new MyClaimPage()