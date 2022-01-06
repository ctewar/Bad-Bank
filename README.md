# Bad-Bank

Description

Interactive banking application that allows you to create or log into an account where you can make deposits or withdrawals. I have created this application to practice how to create a Full Stack application using MERN.

Homepage default
Installation Guidelines

If you would like to copy the application, follow the steps below:

    Select the Fork button in the top right corner of the github repo.
    Click on the green Code button.
        You can either clone the repo via HTTPS or SSH link.
    Open up your terminal and navigation to where you would like to clone the project.
    Enter the command "git clone [HTTPS/SSH link]"
        You should be able to see the project files in the location selected in Step 3.
    Enter the command "npm install" to install the packages in the package.json.
    Enter the command "npm start" to start the project.

How to run

The Application features differ depending on state of user:

Homepage:

    NOT A USER This is the default homepage upon opening the application. Homepage default There will be a button to join, which takes you to the "Create Account" page. Homepage buttons And another button for you to log in if you already have an account.
    AS A USER You will greeted by name. The homepage will now act as your "profile" page. You will find an updated message and have the following features available, User Homepage You will be able to see your current balance and have buttons for corresponding transaction pages: Deposit and Withdrawal. User Homepage Balance and Transaction section Add Another Account this is the only link you can return to the Create Account page after becoming a user. User Homepage Add Another Account Button Logout button, only available on the user homepage. User Homepage Logout Button

Navigation Bar:

    NOT A USER Located in the top right (or centered below the bank logo and title) are the navigation links to the "Home", "Login", "Create Account" and "All Data" pages. Navigation Bar default
    AS A USER Login and Create Account links have been disabled since you are now a user. You will now see links for the Deposit and Withdraw pages. User Navigation Bar

Create Account Page:

    NOT A USER The "Create Account" page will have a form for you to fill out. Create Account page On the bottom there will be a link for the Login page if you are already a user. Already have an account? You must enter all input fields to create an account. There will be error and success alerts. Alerts case sensitive error Alerts password length error Alerts email error Alerts input field empty Emails will be the username for logins. All inputs will be stored in the context. Email input field message Checkbox for Terms & Conditions. Terms & Conditions will open up a modal. Terms & Conditions Modal Once you have successfully created an account, you will be able to add another account. You will also continue the application as a user. Add an Account
    AS A USER Once you are logged in as a user, the Create Account page will have a Add Another Account button instead of the Create Account button. Create Account page as a user On the bottom where there was a section for the "Already have an account?" the Login button has been disabled. Already have an account? comparison

Login Page:

    NOT A USER The "Login" page will have a form for you to fill out. Login Page The username is the email used upon creating an account. Username input field message There will be an error message if email and password do not match any combinations of what is stored in the context store. Error Message Once you successfully login, you will receive a success message and will not continue in the application as a user. Login Success Message
    AS A USER Page will be disabled. Upon logging in you will be redirected to the homepage after the success message. User Homepage

All Data page:

All Data page features remain the same. Information shown update upon creating changes such as creating an account, adding an account, updating balance. The All Data page will show the user info stored in the context store. All Data Table default New info stored will not be kept upon reloading application. (i.e. Balance updates and new user update) All Data Table with new balance info stored All Data Table with new user info stored

Deposit Page:

    NOT A USER DISABLED- Must be logged in as user to view page.
    AS A USER You will see the current balance and have a input field and submit button. Deposit Page On submit, you will receive error messages if input is not a number, or a negative number. If no error, success message will be shown. Deposit Not a Number Error Deposit Negative Number Error Deposit Success Messages

Withdraw Page:

    NOT A USER DISABLED- Must be logged in as user to view page.
    AS A USER You will see the current balance and have a input field and submit button. Withdraw Page On submit, you will receive error messages if input is not a number, a negative number, or if the input quantity exceeds the current balance minus $5.00. If no error, success message will be shown. Withdraw Not a Number Error Withdraw Negative Number Error Withdraw Overdraft Error Withdraw Success Messages

