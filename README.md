# Cypress POM CI/CD - OrangeHRM

End-to-end automation suite for the [OrangeHRM](https://opensource-demo.orangehrmlive.com/) demo application, built with **Cypress** following the **Page Object Model (POM)** pattern, integrated with a **Jenkins CI/CD pipeline** that runs the tests and automatically publishes a **Docker** image to Docker Hub.

## Tech Stack

- **Cypress** – End-to-end automation framework
- **JavaScript (ES6)** – Language used for tests and Page Objects
- **Mochawesome** – HTML report generation
- **Jenkins** – CI/CD pipeline orchestration
- **Docker / Docker Hub** – Packaging and distribution of the test suite

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── TestCasesOrangeHRM/
│   │       └── home.cy.js          # Test cases (specs)
│   ├── fixtures/
│   │   └── expenses.json           # Test data
│   ├── pages/                      # Page Objects
│   │   ├── homePage.js
│   │   ├── loginPage.js
│   │   ├── requestPasswordPage.js
│   │   ├── directoryPage.js
│   │   ├── submitClaimPage.js
│   │   ├── myClaimPage.js
│   │   └── employeeClaimPage.js
│   ├── selectors/                  # Locators separated from logic
│   └── reports/                    # Generated Mochawesome reports
├── Dockerfile
├── Jenkinsfile / pipeline (configured in Jenkins)
└── package.json
```

## Test Cases Covered

| # | Test Case |
|---|---|
| TC001 | Successful login with valid user |
| TC002 | Login with incorrect password |
| TC003 | Login attempt with an unregistered account |
| TC004 | Password recovery (Forgot Password) flow |
| TC005 | Validate the Reset button in Directory |
| TC006 | Validate the filter panel collapse arrow |
| TC007 | Create a Medical Reimbursement claim |
| TC008 | Create an Accommodation claim |
| TC009 | Create a Travel Allowance claim |
| TC010 | Submit a claim with empty fields |
| TC011 | Verify confirmation message |
| TC012 | Complete full claim submission flow |
| TC013 | Validate the Cancel button on Submit Claim |
| TC014 | Create multiple claims with associated expenses |

## Running Tests Locally

```bash
# Install dependencies
npm install

# Open Cypress in interactive mode
npx cypress open

# Run all tests headlessly (Chrome)
npx cypress run --browser chrome --spec "cypress/e2e/TestCasesOrangeHRM/home.cy.js"
```

Reports are automatically generated in `cypress/reports/` thanks to the Mochawesome plugin.

## CI/CD Pipeline (Jenkins)

The pipeline is triggered automatically via **Poll SCM**, checking every 5 minutes for new commits on the `master` branch. Pipeline stages:

1. **Clean Workspace** – Cleans the workspace before each run
2. **Checkout** – Clones the repository
3. **Install Dependencies** – `npm install`
4. **Run Cypress Tests** – Runs the full suite in Chrome
5. **Verify Reports** – Verifies the report was generated
6. **Archive Results** – Archives reports, screenshots, and videos as build artifacts
7. **Build Docker Image** – Builds the image from the `Dockerfile`
8. **Push Docker Image** – Publishes the image to Docker Hub

At the end, Jenkins publishes the **Mochawesome** report as a browsable HTML report inside the build itself.

## Docker

The image includes Cypress already installed along with the project, ready to run in any environment with no extra setup:

```bash
docker pull kevinaburtomuela/orangehrm-cypress:latest
docker run kevinaburtomuela/orangehrm-cypress:latest
```

## Best Practices Applied

- **Page Object Model (POM)** – Separation between UI interaction logic and test cases
- **Centralized selectors** – Locators live in `selectors/` files, independent from Page Objects
- **Parameterized methods** – No hardcoded data inside Page Objects; test values are defined in the specs
- **Fixtures** – Reusable test data managed via JSON files
- **Automated reporting** – Mochawesome for visual reports on every run

## Author

Kevin Aburto Muela