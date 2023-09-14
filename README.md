# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## Part 1 - Page Heading

Add a heading and title to the page

- [ ] Add a heading and title to the DOM.
- [ ] Center the text and give the text a margin of 20px(?) on top and bottom

## Part 2 - HTML Form

Add employee information in using div and form elements below the heading

- [ ] Create an new-employee-info div
- [ ] Add 'Add Employee' or 'Submit New Employee Information' text within the new-employee-info div
- [ ] Create an HTML form within the new-employee-info div with onSubmit functionality
- [ ] Add five input fields, with type="text" and appropriate margin between them, for the user to add the employee's first name, last name, ID number, job title, and annual salary.
- [ ] Add relevant placeholder text to each text input box
- [ ] Add a 'Submit' button to submit the form info and clear the input text

## Part 3 - Employee Data Table

- [ ] Create an employee-data div entitled 'Employee Data'
- [ ] Nest an HTML table within the employee-data div
- [ ] Give the table a list of headings as follows: First Name, Last Name, ID, Title, Annual Salary, Remove Employee?

## Part 4 - Total Monthly Salary
- [ ] Below the HTML table, add a monthly-salary div with the text `Total Monthly Salary: ${monthlySalary}`

## Part 5 - JavaScript

- [ ] Declare global variables for each input value from the HTML form
- [ ] Create a submitInfo() function to append table rows to the HTML table when the form is submitted, including a 'Delete' button for each employee that fires an onClick="deleteEmployee(e)" function
- [ ] Create a deleteEmployee(e) function that prompts the user to ask if they are sure that they want to delete firstName's data, then deletes the parent element(?) of the delete button that the user clicked
- [ ] Within the 