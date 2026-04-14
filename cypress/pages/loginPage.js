import { loginSelector } from '../selectors/loginSelector'

class LoginPage {


    visit() {
        cy.visit('/')
}
    LoginSuccess(){
        cy.get(loginSelector.usernameField).type('Admin')
        cy.get(loginSelector.passwordField).type('admin123')        
        cy.get(loginSelector.submitButton).click()
    }

    LoginPasswordIncorrect(){
        cy.get(loginSelector.usernameField).type('Admin')
        cy.get(loginSelector.passwordField).type('4444')        
        cy.get(loginSelector.submitButton).click()
        cy.get(loginSelector.messageAlert).should('have.text', 'Invalid credentials')
    }

    LoginUnregisteredAccount(){
        cy.get(loginSelector.usernameField).type('Kevin Aburto')
        cy.get(loginSelector.passwordField).type('admin123')        
        cy.get(loginSelector.submitButton).click()
        cy.get(loginSelector.messageAlert).should('have.text', 'Invalid credentials')
    }

    ForgotPassword(){
        cy.get(loginSelector.forgotYourPassword).click()
    }

}

export default new LoginPage()