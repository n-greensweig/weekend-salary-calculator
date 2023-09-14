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
    sumSalaries();
    setSumHTML();
}

const removeEmployee = e => e.target.parentElement.parentElement.remove();

let table = document.querySelector(`#employee-data-table`);
let rows = table.rows;
let salaries = [];

function sumSalaries() {
    let salary;
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        salary = row.cells[4].innerHTML;
    }
    salaries.push(Number(salary));
    let monthlySum = Math.ceil(salaries.reduce((acc, curr) => acc + curr, 0) / 12);
    return monthlySum;
}

const setSumHTML = () => {
    document.querySelector(`#monthly-salary-div`).innerHTML = `
    <p>Total monthly salary: ${sumSalaries()}</p>
    `;
};

