import { employeeClaimSelector } from '../selectors/employeeClaimSelector'

class EmployeeClaimPage {

    GoEmployeeClaims(){
        cy.contains('Employee Claims').click()
    }

    ValidateEmployeeClaim(){ 
        //Validate the submited claim
        cy.contains(employeeClaimSelector.recordFound, 'Test case 19 data').closest('.oxd-table-row').should('contain', 'Submitted')
    }


}

export default new EmployeeClaimPage()