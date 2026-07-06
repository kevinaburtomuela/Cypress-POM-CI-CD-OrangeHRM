import { submitClaimSelector } from '../selectors/submitClaimSelector'

class SubmitClaimPage {

    GoSubmitClaim(){
        cy.contains('Submit Claim').click()
    }

    CreateClaim(eventType, currency, note) {
        cy.get(submitClaimSelector.eventDropdown).click()
        cy.contains(eventType).click()
        cy.get(submitClaimSelector.currencyDropdown).click()
        cy.contains(currency).click()
        cy.get(submitClaimSelector.eventInput).type(note)
        cy.get(submitClaimSelector.createButton).click()
    }

    FillClaimWithoutSelection(note) {
        cy.get(submitClaimSelector.eventInput).type(note)
        cy.get(submitClaimSelector.createButton).click()
    }

    ValidateSuccessMessage(message = 'Successfully Saved') {
        cy.contains(message).should('exist')
    }

    ClaimSubmitingProcess(){
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.contains('Success').should('exist')
    }

    CancelClaim() {
        cy.get(submitClaimSelector.cancelButton).click()
    }

    AddExpense(expense){
        cy.get(submitClaimSelector.addExpensesButton).click()
        cy.get(submitClaimSelector.ExpenseTypeDropdown).click()
        cy.contains(expense.ExpenseType).click()
        cy.get(submitClaimSelector.dateField).clear().type(expense.Date)
        cy.get(submitClaimSelector.amountField).type(expense.Amount)
        cy.get(submitClaimSelector.noteField).type(expense.Note)
        cy.get(submitClaimSelector.saveButton).click()
        cy.contains('Successfully Saved').should('exist')
    }

    ValidateExpensesTotal(recordsCount, totalText) {
        cy.contains(`(${recordsCount}) Records Found`).should('exist')
        cy.get(submitClaimSelector.totalExpenses).should('contain.text', totalText)
    }

}

export default new SubmitClaimPage()