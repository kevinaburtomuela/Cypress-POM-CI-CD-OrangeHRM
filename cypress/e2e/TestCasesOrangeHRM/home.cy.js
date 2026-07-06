import HomePage from '../../pages/homePage'
import LoginPage from '../../pages/loginPage'
import RequestPasswordPage from '../../pages/requestPasswordPage'
import DirectoryPage from '../../pages/directoryPage'
import SubmitClaimPage from '../../pages/submitClaimPage'
import MyClaimPage from '../../pages/myClaimPage'
import EmployeeClaimPage from '../../pages/employeeClaimPage'
import expenseData from '../../fixtures/expenses.json'

const ADMIN_USERNAME = 'Admin'
const ADMIN_PASSWORD = 'admin123'

describe('Automation for the OrangeHRM for APEX System', () => {

  it('TC001 - Test login with valid user', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.ValidateHomePage()
  })

  it('TC002 - Test login with incorrect password', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, '4444')
    LoginPage.ValidateErrorMessage('Invalid credentials')
  })

  it('TC003 - User attempts to log in with an unregistered account', () => {
    LoginPage.visit()
    LoginPage.Login('Kevin Aburto', ADMIN_PASSWORD)
    LoginPage.ValidateErrorMessage('Invalid credentials')
  })

  it('TC004 - Verify the password recovery functionality', () => {
    LoginPage.visit()
    LoginPage.ForgotPassword()
    RequestPasswordPage.ResetPasswordRequest('KevinAburto')
    RequestPasswordPage.ValidateResetMessage('Reset Password link sent successfully')
  })

  it('TC005 - Validate the Reset button', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectDirectoryMenu()
    DirectoryPage.FillFilters({
      name: 'Peter Mac Anderson',
      jobTitle: 'Chief Financial Officer',
      location: 'New York Sales Office'
    })
    DirectoryPage.ClickReset()
    DirectoryPage.ValidateFiltersCleared()
  })

  it('TC006 - Validate the Dropdown arrow', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectDirectoryMenu()
    DirectoryPage.ClickDropdownArrow()
    DirectoryPage.ValidateFiltersHidden()
  })

  it('TC007 - Create a Medical reimbursement claim', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaim('Medical Reimbursement', 'Mexican Peso', 'Test case 12 data')
    SubmitClaimPage.ValidateSuccessMessage()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateClaimStatus('Test case 12 data', 'Initiated')
  })

  it('TC008 - Create an Accommodation claim', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaim('Accommodation', 'Mexican Peso', 'Test case 13 data')
    SubmitClaimPage.ValidateSuccessMessage()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateClaimStatus('Test case 13 data', 'Initiated')
  })

  it('TC009 - Travel Allowance', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaim('Travel Allowance', 'Mexican Peso', 'Test case 14 data')
    SubmitClaimPage.ValidateSuccessMessage()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateClaimStatus('Test case 14 data', 'Initiated')
  })

  it('TC010 - Submit claim with empty fields', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.FillClaimWithoutSelection('Test case 15 data')
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateClaimNotExist('Test case 15 data')
  })

  it('TC011 - Verify confirmation message', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaim('Travel Allowance', 'Mexican Peso', 'Test case 16 data')
    SubmitClaimPage.ValidateSuccessMessage()
  })

  it('TC012 - Complete full claim submission flow', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaim('Travel Allowance', 'Korean Won', 'Test case 17 data')
    SubmitClaimPage.ValidateSuccessMessage()
    SubmitClaimPage.ClaimSubmitingProcess()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateClaimStatus('Test case 17 data', 'Submitted')
  })

  it('TC013 - Validate the cancel button on the Submit claim page', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaim('Accommodation', 'Korean Won', 'Test case 18 data')
    SubmitClaimPage.CancelClaim()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateClaimNotExist('Test case 18 data')
  })

  it('TC014 - Creation of multiples claims with valid date', () => {
    LoginPage.visit()
    LoginPage.Login(ADMIN_USERNAME, ADMIN_PASSWORD)
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaim('Medical Reimbursement', 'Euro', 'Test case 19 data')
    SubmitClaimPage.ValidateSuccessMessage()
    SubmitClaimPage.AddExpense(expenseData.expenses[0])
    SubmitClaimPage.AddExpense(expenseData.expenses[1])
    SubmitClaimPage.ValidateExpensesTotal(2, 'Total Amount (Euro) : 400.00')
    SubmitClaimPage.ClaimSubmitingProcess()
    EmployeeClaimPage.GoEmployeeClaims()
    EmployeeClaimPage.ValidateClaimStatus('Test case 19 data', 'Submitted')
  })

})