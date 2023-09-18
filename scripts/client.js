console.log('script sourced');

const salaryTable = document.querySelector(`#employee-data-table`);
const monthlySalaryDiv = document.querySelector(`#monthly-salary-div`);
const tableBody = document.querySelector(`.table-body`);
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

const rows = salaryTable.rows;
let monthlySum = 0;
let salaries = [];
let idNums = [];







function submitInfo(e) {
    
    e.preventDefault();

    let newEmployee = {
        firstName: document.querySelector(`#first-name`).value,
        lastName: document.querySelector(`#last-name`).value,
        idNumber: document.querySelector(`#id-number`).value,
        jobTitle: document.querySelector(`#job-title`).value,
        annualSalary: document.querySelector(`#annual-salary`).value
    }

    employees.push(newEmployee);
    console.log(employees);

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

    document.querySelector(`#first-name`).value = '';
    document.querySelector(`#last-name`).value = '';
    document.querySelector(`#id-number`).value = '';
    document.querySelector(`#job-title`).value = '';
    document.querySelector(`#annual-salary`).value = '';
    sumSalaries();
}









function removeEmployee(e) {
    let salaryToRemove = Number((Number(e.target.parentElement.parentElement.cells[4].innerHTML) / 12).toFixed(2));

    salaries.splice(idNums.indexOf(e.target.parentElement.parentElement.cells[2].innerHTML), 1);

    monthlySum -= salaryToRemove;
    e.target.parentElement.parentElement.remove();
    monthlySalaryDiv.innerHTML = `
    <p>Total monthly salary: ${monthlySum}</p>
    `;

    redBackground();
};








function sumSalaries() {
    let salary;
    let idNum;
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        salary = Number(row.cells[4].innerHTML);
        idNum = Number(row.cells[2].innerHTML);
    }

    salaries.push(salary);
    idNums.push(idNum);
    monthlySum = Number((salaries.reduce((acc, curr) => acc + curr, 0) / 12).toFixed(2));
    console.log(monthlySum);
    // monthlySum = formatter.format(monthlySum);
    monthlySalaryDiv.innerHTML = `
    <p>Total monthly salary: ${monthlySum}</p>
    `;

    redBackground();
}


function redBackground() {
    if (monthlySum > 20000) {
        monthlySalaryDiv.innerHTML = `
    <p style="background-color: #d0342c; display: inline-block; padding: 5px;">Over budget! Total monthly salary: ${monthlySum}</p>
    `;
    }
}