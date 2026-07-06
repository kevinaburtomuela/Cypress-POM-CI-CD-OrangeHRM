import { requestPasswordSelector } from '../selectors/requestPasswordSelector'

class RequestPasswordPage {

    ResetPasswordRequest(username) {
        cy.get(requestPasswordSelector.usernameField).type(username)
        cy.get(requestPasswordSelector.resetPasswordButton).click()
    }

    ValidateResetMessage(message) {
        cy.get('.orangehrm-forgot-password-title').should('contain.text', message)
    }

}

export default new RequestPasswordPage()