import { employeeClaimSelector } from '../selectors/employeeClaimSelector'

class EmployeeClaimPage {

    GoEmployeeClaims(){
        cy.contains('Employee Claims').click()
    }

    ValidateClaimStatus(noteText, status) {
        cy.contains(employeeClaimSelector.recordFound, noteText).closest('.oxd-table-row').should('contain', status)
    }

}

export default new EmployeeClaimPage()