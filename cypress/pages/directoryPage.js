import { directorySelector } from '../selectors/directorySelector'

class DirectoryPage {


    FullName(){
        cy.get(directorySelector.employeeNameField).type('Peter Mac Anderson')       
        cy.get(directorySelector.searchButton).click()
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','(1) Record Found')        
        
        // This is the verification that the assert works
        //cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','(99) Records Found')
    }

    PartialName(){
        cy.get(directorySelector.employeeNameField).type('Anne')       
        cy.get(directorySelector.searchButton).click()
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','(1) Record Found')    
    }

    JobTittle(){
        cy.get(directorySelector.jobTitleMenu).click()
        cy.contains('HR Manager').click()
        cy.get(directorySelector.searchButton).click()
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','(1) Record Found')  
        cy.contains('Anne a Asprey').should('be.visible')
    }

    Location(){
        cy.get(directorySelector.LocationMenu).click()        
        cy.contains('Texas R&D').click()        
        cy.get(directorySelector.searchButton).click()        
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','(1) Record Found') 
        cy.contains('Anne a Asprey').should('be.visible')
    }

    MultipleFilters(){
        cy.get(directorySelector.employeeNameField).type('Peter Mac Anderson')
        cy.get(directorySelector.jobTitleMenu).click()
        cy.contains('Chief Financial Officer').click()   
        cy.get(directorySelector.LocationMenu).click()        
        cy.contains('New York Sales Office').click()
        cy.get(directorySelector.searchButton).click()        
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','(1) Record Found')  
        cy.contains('Peter Mac Anderson').should('be.visible')

    }
    ResetButton(){
        cy.get(directorySelector.employeeNameField).type('Peter Mac Anderson')
        cy.get(directorySelector.jobTitleMenu).click()
        cy.contains('Chief Financial Officer').click()   
        cy.get(directorySelector.LocationMenu).click()        
        cy.contains('New York Sales Office').click()
        cy.get(directorySelector.resetButton).click()
        cy.get(directorySelector.employeeNameField).should('have.value', '')
        cy.get(directorySelector.jobTitleMenu).should('have.value', '')        
        cy.get(directorySelector.LocationMenu).should('have.value', '')

    }

    DropdownArrow(){
        cy.get(directorySelector.dropdownIcon).click()
        cy.get(directorySelector.employeeNameField).should('not.be.visible')
        cy.get(directorySelector.jobTitleMenu).should('not.be.visible')
        cy.get(directorySelector.LocationMenu).should('not.be.visible')

    }

}

export default new DirectoryPage()