console.log('script sourced');

/**
 * Global variable declarations of HTML elements
 */
const salaryTable = document.querySelector(`#employee-data-table`);
const monthlySalaryDiv = document.querySelector(`#monthly-salary-div`);
const tableBody = document.querySelector(`.table-body`);
const firstNameVar = document.querySelector(`#first-name`);
const lastNameVar = document.querySelector(`#last-name`);
const idNumVar = document.querySelector(`#id-number`);
const jobTitleVar = document.querySelector(`#job-title`);
const annualSalaryVar = document.querySelector(`#annual-salary`);
const rows = salaryTable.rows;


/**
 * Global variable used to format numbers as US dollars
 */
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

/**
 * Global variables used in sumSalaries function
 */
let monthlySum = 0;
let salaries = [];
let idNums = [];





/**
 * @param {Event} e Takes in form submission as a parameter
 * @returns Adds form info to the table
 */

function submitInfo(e) {

    e.preventDefault();


    let newEmployee = {
        firstName: firstNameVar.value,
        lastName: lastNameVar.value,
        idNumber: idNumVar.value,
        jobTitle: jobTitleVar.value,
        annualSalary: annualSalaryVar.value
    }
    // validateResponses(newEmployee.firstName, newEmployee.lastName, newEmployee.idNumber, newEmployee.jobTitle, newEmployee.annualSalary);

    // Push newEmployee object into employees array in case there is a future use case for doing so
    employees.push(newEmployee);

    // Add form info to the table on the DOM
    tableBody.innerHTML += `
    <tr>
    <td class="first-name-data">${newEmployee.firstName}</td>
    <td class="last-name-data">${newEmployee.lastName}</td>
    <td class="id-number-data">${newEmployee.idNumber}</td>
    <td class="job-title-data">${newEmployee.jobTitle}</td>
    <td class="annual-salary-data">${newEmployee.annualSalary}</td>
    <td><button class="remove-button" onclick="removeEmployee(event)">Remove employee</button></td>
    </tr>
    `
    // Reset input field values to empty
    document.querySelector(`#first-name`).value = '';
    document.querySelector(`#last-name`).value = '';
    document.querySelector(`#id-number`).value = '';
    document.querySelector(`#job-title`).value = '';
    document.querySelector(`#annual-salary`).value = '';

    // Should we always return something?
    // Update the monthly salary counter on the DOM
    return sumSalaries();

}








/**
 * @param {Event} e Accepts a click of the 'Remove employee' button in the table's six column
 * @returns Removes a selected employee from the table and returns 
 * a red background of the sum if the sum exceeds $20k.
 */
function removeEmployee(e) {

    // Coerce the salary figure in the same row as the clicked 'Remove employee' button into a number
    let salaryToRemove = Number((Number(e.target.parentElement.parentElement.cells[4].innerHTML) / 12).toFixed(2));

    // Remove the selected salary and employee from the respective 'salaries' and employees arrays
    salaries.splice(idNums.indexOf(e.target.parentElement.parentElement.cells[2].innerHTML), 1);
    employees.splice(idNums.indexOf(e.target.parentElement.parentElement.cells[2].innerHTML), 1);

    // Subtract the selected salary from the salary counter on the DOM and set the counter to the new appropriate figure
    monthlySum -= salaryToRemove;
    e.target.parentElement.parentElement.remove();
    monthlySalaryDiv.innerHTML = `
    <p>Total monthly salary: ${monthlySum}</p>
    `;

    // Should we always return something?
    // Set the background color of the salary counter to red if the monthly salary exceeds $20k
    return redBackground();

};







/**
 * @returns Adds the sum of the salaries in the 'salaries' array and returns 
 * a red background of the sum if the sum exceeds $20k.
 */
function sumSalaries() {
    let salary;
    let idNum;

    // Set 'salary' and 'idNum' to the respective lists of values in the table
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        salary = Number(row.cells[4].innerHTML);
        idNum = Number(row.cells[2].innerHTML);
    }

    // Push each employee's salary and id numbers into the respective 'salaries' and 'idNums' arrays
    salaries.push(salary);
    idNums.push(idNum);

    // Sum the numbers in the 'salaries' array and round to two decimal points
    monthlySum = Number((salaries.reduce((acc, curr) => acc + curr, 0) / 12).toFixed(2));

    // monthlySum = formatter.format(monthlySum);
   
    // Set the total monthly salary in the DOM
    monthlySalaryDiv.innerHTML = `
    <p>Total monthly salary: ${monthlySum}</p>
    `;

    // Should we always return something?
    // Set the background color of the salary counter to red if the monthly salary exceeds $20k
    return redBackground();

}




/**
 * @returns Helper function that returns a red background of the sum if the monthly sum exceeds $20k.
 */
function redBackground() {

    // Set the background color of the salary counter to red if the monthly salary exceeds $20k
    if (monthlySum > 20000) {
        // Should we always return something?
        return monthlySalaryDiv.innerHTML = `
    <p style="background-color: #d0342c; display: inline-block; padding: 5px;">Over budget! Total monthly salary: ${monthlySum}</p>
    `;

    }
}



// fNameInput, lNameInput, idNumInput, titleInput, salaryInput
function validateResponses(fNameInput, lNameInput, idNumInput, titleInput, salaryInput) {
    let alphaRegEx = /^[a-zA-Z0-9 ]+$/;
    let numericRegEx = /^[0-9]+$/;

    if (!alphaRegEx.test(fNameInput)) {
        return alert(`Please enter only alpha characters in the first name box.`);
    } else if (!alphaRegEx.test(lNameInput)) {
        return alert(`Please enter only alpha characters in the last name box.`);
    } else if (!numericRegEx.test(idNumInput)) {
        return alert(`Please enter a 7-digit id number in the ID Number box.`);
    } else if (!alphaRegEx.test(titleInput)) {
        return alert(`Please enter only alpha characters in the job title box.`);
    } else if (!numericRegEx.test(salaryInput)) {
        return alert(`Please only enter numeric characters in the salary box.`);
    } else {
        // Do nothing
    }

}

// validateResponses('Noah', 'Greensweig', 1234567, 'Noah Greensweig', '1234564');