import { requestPasswordSelector } from '../selectors/requestPasswordSelector'

class RequestPasswordPage {

    
    ResetPasswordRequest(){
        cy.get(requestPasswordSelector.usernameField).type('KevinAburto')
        cy.get(requestPasswordSelector.resetPasswordButton).click()        
        cy.get('.orangehrm-forgot-password-title').should('contain.text', 'Reset Password link sent successfully')
    }

}

export default new RequestPasswordPage()