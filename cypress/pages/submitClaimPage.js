import { submitClaimSelector } from '../selectors/submitClaimSelector'

class SubmitClaimPage {

    GoSubmitClaim(){
        cy.contains('Submit Claim').click()
    }

    MedicalReinbursmentClaim(){         
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains('Medical Reimbursement').click() 
        cy.get(submitClaimSelector.currencyDropdown).click()        
        cy.contains('Mexican Peso').click()         
        cy.get(submitClaimSelector.eventInput).type('Test case 12 data')
        cy.get(submitClaimSelector.createButton).click()
        cy.contains('Successfully Saved').should('exist')
    }

    AccommodationClaim(){         
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains('Accommodation').click() 
        cy.get(submitClaimSelector.currencyDropdown).click()        
        cy.contains('Mexican Peso').click()         
        cy.get(submitClaimSelector.eventInput).type('Test case 13 data')
        cy.get(submitClaimSelector.createButton).click()
        cy.contains('Successfully Saved').should('exist')
    }

    TravelAllowanceClaim(){         
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains('Travel Allowance').click() 
        cy.get(submitClaimSelector.currencyDropdown).click()        
        cy.contains('Mexican Peso').click()         
        cy.get(submitClaimSelector.eventInput).type('Test case 14 data')
        cy.get(submitClaimSelector.createButton).click()
        cy.contains('Successfully Saved').should('exist')
    }

    EmptyFieldsClaim(){                 
        cy.get(submitClaimSelector.eventInput).type('Test case 15 data')
        cy.get(submitClaimSelector.createButton).click()
    }

    ValidateSuccessMessage(){                 
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains('Travel Allowance').click() 
        cy.get(submitClaimSelector.currencyDropdown).click()        
        cy.contains('Mexican Peso').click()         
        cy.get(submitClaimSelector.eventInput).type('Test case 16 data')
        cy.get(submitClaimSelector.createButton).click()
        cy.contains('Successfully Saved').should('exist')
    }

    SubmitClaim(){
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains('Travel Allowance').click() 
        cy.get(submitClaimSelector.currencyDropdown).click()        
        cy.contains('Korean Won').click()         
        cy.get(submitClaimSelector.eventInput).type('Test case 17 data')
        cy.get(submitClaimSelector.createButton).click()
        cy.contains('Successfully Saved').should('exist')
        cy.contains('button', 'Submit').should('be.visible').click() 
        cy.contains('Success').should('exist') 

    }

    CancelClaim(){
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains('Accommodation').click() 
        cy.get(submitClaimSelector.currencyDropdown).click()        
        cy.contains('Korean Won').click()         
        cy.get(submitClaimSelector.eventInput).type('Test case 18 data')
        cy.get(submitClaimSelector.cancelButton).click()
    }

    CreateClaimRequest(){
        //Create a claim "Medical Reimbursement" claim
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains('Medical Reimbursement').click() 
        cy.get(submitClaimSelector.currencyDropdown).click()        
        cy.contains('Euro').click()         
        cy.get(submitClaimSelector.eventInput).type('Test case 19 data')
        cy.get(submitClaimSelector.createButton).click()  
        //Validate that the success message is displayed    
        cy.contains('Successfully Saved').should('exist')
        
    }

    AddExpenseOne(){
        //Add the first expense
        cy.get(submitClaimSelector.addExpensesButton).click()
        cy.get(submitClaimSelector.ExpenseTypeDropdown).click() 
        cy.contains('Transport').click()         
        cy.get(submitClaimSelector.dateField).clear().type('2026-03-25')        
        cy.get(submitClaimSelector.amountField).type('100.00')                
        cy.get(submitClaimSelector.noteField).type('Test case 19')        
        cy.get(submitClaimSelector.saveButton).click()
        //Validate the success expense message
        cy.contains('Successfully Saved').should('exist')
    }

    AddExpenseTwo(){
        //Add the second expense
        cy.get(submitClaimSelector.addExpensesButton).click()
        cy.get(submitClaimSelector.ExpenseTypeDropdown).click() 
        cy.contains('Planned Surgery').click()         
        cy.get(submitClaimSelector.dateField).clear().type('2026-04-01')        
        cy.get(submitClaimSelector.amountField).type('300.00')                
        cy.get(submitClaimSelector.noteField).type('Test case 19')        
        cy.get(submitClaimSelector.saveButton).click()
        //Validate the success expense message
        cy.contains('Successfully Saved').should('exist')
    }
    ValidateTheExpenses(){
        //Validate the expenses and the amount
        cy.contains('(2) Records Found').should('exist')                
        cy.get(submitClaimSelector.totalExpenses).should('contain.text', 'Total Amount (Euro) : 400.00')
    }

    ClaimSubmitingProcess(){  
        //Submit the expense      
        cy.contains('button', 'Submit').should('be.visible').click() 
        cy.contains('Success').should('exist') 

    }


}

export default new SubmitClaimPage()