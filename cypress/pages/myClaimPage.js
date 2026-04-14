import { myClaimSelector } from '../selectors/myClaimSelector'

class MyClaimPage {

    GoMyClaim(){
        cy.contains('My Claim').click()
    }

    ValidateMedicalReimbursementClaim(){ 
        cy.contains(myClaimSelector.recordFound, 'Test case 12 data').closest('.oxd-table-row').should('contain', 'Initiated')
    }

    ValidateAccommodationClaim(){ 
        cy.contains(myClaimSelector.recordFound, 'Test case 13 data').closest('.oxd-table-row').should('contain', 'Initiated')
    }
     
    ValidateTravelAllowanceClaim(){ 
        cy.contains(myClaimSelector.recordFound, 'Test case 14 data').closest('.oxd-table-row').should('contain', 'Initiated')
    }

    ValidateEmptyFieldsClaim(){ 
        cy.contains(myClaimSelector.recordFound, 'Test case 15 data').should('not.exist')
    }

    ValidateSubmitedClaim(){
        cy.contains(myClaimSelector.recordFound, 'Test case 17 data').closest('.oxd-table-row').should('contain', 'Submitted')
    }
    
    ValidateCancelClaim(){
        cy.contains(myClaimSelector.recordFound, 'Test case 18 data').should('not.exist')
    }

}

export default new MyClaimPage()