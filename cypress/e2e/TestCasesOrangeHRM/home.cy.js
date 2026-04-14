import HomePage from '../../pages/homePage'
import LoginPage from '../../pages/loginPage'
import RequestPasswordPage from '../../pages/requestPasswordPage'
import DirectoryPage from '../../pages/directoryPage'
import SubmitClaimPage from '../../pages/submitClaimPage'
import MyClaimPage from '../../pages/myClaimPage'
import EmployeeClaimPage from '../../pages/employeeClaimPage'


describe('Automation for the OrangeHRM for APEX System', () => {

  it('TC001 - Test login with valid user', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.ValidateHomePage()
  })
  
    it('TC002 - Test login with incorrect password', () => {
    LoginPage.visit()
    LoginPage.LoginPasswordIncorrect()
  })

    it('TC003 - User attempts to log in with an unregistered account', () => {
    LoginPage.visit()
    LoginPage.LoginUnregisteredAccount()
  })

    it('TC004 - Verify the password recovery functionality', () => {
    LoginPage.visit()
    LoginPage.ForgotPassword()
    RequestPasswordPage.ResetPasswordRequest()
  })

    it('TC005 - Search employee by full name', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectDirectoryMenu()
    DirectoryPage.FullName()
  })

    it('TC006 - Search employee by partial name', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectDirectoryMenu()
    DirectoryPage.PartialName()
  })

  
    it('TC007 - Search by Job Title', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectDirectoryMenu()
    DirectoryPage.JobTittle()
  })


    it('TC008 - Search by Location', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectDirectoryMenu()
    DirectoryPage.Location()
  })

  
    it('TC009 - Search using multiple filters', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectDirectoryMenu()
    DirectoryPage.MultipleFilters()
  })

    it('TC010 - Validate the Reset button', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectDirectoryMenu()
    DirectoryPage.ResetButton()
  })

  

    it('TC011 - Validate the Dropdown arrow', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectDirectoryMenu()
    DirectoryPage.DropdownArrow()
  })

    it('TC012 - Create a Medical reimbursement claim', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.MedicalReinbursmentClaim()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateMedicalReimbursementClaim()
  })


    it('TC013 - Create an Accommodation claim', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.AccommodationClaim()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateAccommodationClaim()
  })

  
    it('TC014 - Travel Allowance', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.TravelAllowanceClaim()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateTravelAllowanceClaim()
  })

    it('TC015 - Submit claim with empty fields', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.EmptyFieldsClaim()
    MyClaimPage.GoMyClaim()
    MyClaimPage.ValidateEmptyFieldsClaim()
  })
  

  it('TC016 - Verify confirmation message', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.ValidateSuccessMessage()
  })
 

    it('TC017 - Complete full claim submission flow', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.SubmitClaim()
    MyClaimPage.GoMyClaim()    
    MyClaimPage.ValidateSubmitedClaim()
  })


    it('TC018 - Validate the cancel button on the Submit claim page', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CancelClaim()
    MyClaimPage.GoMyClaim()    
    MyClaimPage.ValidateCancelClaim()
  })
 
    it('TC019 - APEX recommended automation exercise', () => {
    LoginPage.visit()
    LoginPage.LoginSuccess()
    HomePage.SelectClaimMenu()
    SubmitClaimPage.GoSubmitClaim()
    SubmitClaimPage.CreateClaimRequest()    
    SubmitClaimPage.AddExpenseOne()      
    SubmitClaimPage.AddExpenseTwo()       
    SubmitClaimPage.ValidateTheExpenses()      
    SubmitClaimPage.ClaimSubmitingProcess()
    EmployeeClaimPage.GoEmployeeClaims()    
    EmployeeClaimPage.ValidateEmployeeClaim()
  })




})