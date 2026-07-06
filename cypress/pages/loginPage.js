import { loginSelector } from '../selectors/loginSelector'

class LoginPage {

    visit() {
        cy.visit('/')
    }

    Login(username, password) {
        cy.get(loginSelector.usernameField).type(username)
        cy.get(loginSelector.passwordField).type(password)
        cy.get(loginSelector.submitButton).click()
    }

    ValidateErrorMessage(message) {
        cy.get(loginSelector.messageAlert).should('have.text', message)
    }

    ForgotPassword(){
        cy.get(loginSelector.forgotYourPassword).click()
    }

}

export default new LoginPage()