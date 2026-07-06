import { directorySelector } from '../selectors/directorySelector'

class DirectoryPage {

    FillFilters({ name, jobTitle, location } = {}) {
        if (name) {
            cy.get(directorySelector.employeeNameField).type(name)
        }
        if (jobTitle) {
            cy.get(directorySelector.jobTitleMenu).click()
            cy.contains(jobTitle).click()
        }
        if (location) {
            cy.get(directorySelector.LocationMenu).click()
            cy.contains(location).click()
        }
    }

    ClickReset() {
        cy.get(directorySelector.resetButton).click()
    }

    ValidateFiltersCleared() {
        cy.get(directorySelector.employeeNameField).should('have.value', '')
        cy.get(directorySelector.jobTitleMenu).should('have.value', '')
        cy.get(directorySelector.LocationMenu).should('have.value', '')
    }

    ClickDropdownArrow() {
        cy.get(directorySelector.dropdownIcon).click()
    }

    ValidateFiltersHidden() {
        cy.get(directorySelector.employeeNameField).should('not.be.visible')
        cy.get(directorySelector.jobTitleMenu).should('not.be.visible')
        cy.get(directorySelector.LocationMenu).should('not.be.visible')
    }

}

export default new DirectoryPage()