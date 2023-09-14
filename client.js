console.log('script sourced');
const salaryTable = document.querySelector(`#employee-data-table`);

function submitInfo(e) {
    e.preventDefault();
    let firstName = document.querySelector(`#first-name`).value;
    let lastName = document.querySelector(`#last-name`).value;
    let idNumber = document.querySelector(`#id-number`).value;
    let jobTitle = document.querySelector(`#job-title`).value;
    let annualSalary = document.querySelector(`#annual-salary`).value;
    salaryTable.innerHTML += `
    <tr>
        <td class="first-name-data">${firstName}</td>
        <td class="last-name-data">${lastName}</td>
        <td class="id-number-data">${idNumber}</td>
        <td class="job-title-data">${jobTitle}</td>
        <td class="annual-salary-data">${annualSalary}</td>
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
let data = document.querySelector(`#employee-data-table`);
function sumSalaries(salary) {
    for (let i = 1; i < data.length; i++) {
        console.log(data.rows);
        console.log(data[i]);
    }
        salaries.push(salary);

    // console.log(salaries);
}