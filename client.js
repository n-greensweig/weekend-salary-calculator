console.log('script sourced');
const salaryTable = document.querySelector(`#employee-data-table`);

function submitInfo(e) {
    e.preventDefault();
    let newEmployee = {
        firstName: document.querySelector(`#first-name`).value,
        lastName: document.querySelector(`#last-name`).value,
        idNumber: document.querySelector(`#id-number`).value,
        jobTitle: document.querySelector(`#job-title`).value,
        annualSalary: document.querySelector(`#annual-salary`).value
    }
    salaryTable.innerHTML += `
    <tr>
        <td class="first-name-data">${newEmployee.firstName}</td>
        <td class="last-name-data">${newEmployee.lastName}</td>
        <td class="id-number-data">${newEmployee.idNumber}</td>
        <td class="job-title-data">${newEmployee.jobTitle}</td>
        <td class="annual-salary-data">${newEmployee.annualSalary}</td>
        <td><button class="remove-button" onclick="removeEmployee(event)">Remove employee</button></td>
    </tr>
    `
    document.querySelector(`#first-name`).value = '';
    document.querySelector(`#last-name`).value = '';
    document.querySelector(`#id-number`).value = '';
    document.querySelector(`#job-title`).value = '';
    document.querySelector(`#annual-salary`).value = '';
    sumSalaries(document.querySelector(`.annual-salary-data`).innerHTML);
}

const removeEmployee = e => e.target.parentElement.parentElement.remove();

let salaries = [];
let table = document.querySelector(`#employee-data-table`);
let rows = table.rows;
// console.log(table.rows[0].cells[4].innerHTML);
function sumSalaries(salary) {
    let salarySum = salaries.reduce((acc, currVal) => acc + currVal, 0);
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        salaries.push(Number(row.cells[4].innerHTML));
    }
    console.log(salaries);
    console.log(salarySum);
}