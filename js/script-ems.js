//GLOBAL VARIABLES 

let employees = []

//CREATE AN ARRAY OF INITIAL EMPLOYEES 
const initEmployees = [ 
    {id: 70001234 , name: 'Jack Smith', extension: 1111 , email: 'jsmith@disney.com', department: 'Marketing'},
    {id: 70001235 , name: 'Ham Burgler', extension: 1112 , email: 'hburglerh@mcdonalds.com', department: 'Sales'},
    {id: 70001236 , name: 'Homer Simpson', extension: 1113 , email: 'hsimpson@springfieldnuclearplant.com', department: 'Engineering'},
    {id: 70001237 , name: 'Fraiser Crane', ension: 1114 , email: 'imlistening@Seattle.com', department: 'Quality Assurance'},
    {id: 70001238 , name: 'Tony Stark', extension: 1115 , email: 'ironman@thedisneycorporation.com', department: 'Executive'} 
]

//CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS function 
function loadInitEmployees() { 
    if (localStorage.getItem('employees')) {
//IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY 
    employees = JSON.parse(localStorage.getItem('employees')) 
    } else { 
// IF NOT, USE INITIAL ARRAY AND SAVE TO STORAGE 
    employees = initEmployees 
    localStorage.setItem('employees', JSON.stringify(employees)) 
    } 
}
//GET DOM ELEMENTS 
const form = document.getElementById('addForm') 
const empTable = document.getElementById('empTable') 
const empCount = document.getElementById('empCount')
//BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS 
window.onload = function() { 
    loadInitEmployees() 
    buildGrid() 
}
//ADD EMPLOYEE 
form.addEventListener('submit', (e) => { 
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES

    const id = document.getElementById('id').value 
    const name = document.getElementById('name').value 
    const extension = document.getElementById('extension').value 
    const email = document.getElementById('email').value 
    const department = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    const newEmployee = { id: Number(id), name, extension: Number(extension), email, department }

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    employees.push(newEmployee)

    // BUILD THE GRID

    buildGrid()

    // RESET THE FORM

    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX

    document.getElementById('id').focus()
})

//DELETE EMPLOYEE

empTable.addEventListener('click', (e) => { 
    if (e.target.tagName === 'BUTTON') { 
    // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {

    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

            const id = Number(e.target.parentNode.parentNode.firstElementChild.textContent)

    // REMOVE EMPLOYEE FROM ARRAY

            employees = employees.filter(employee => employee.id !== id) 

    // BUILD THE GRID

            buildGrid() 
        } 
    } 
})

//BUILD THE EMPLOYEES GRID

function buildGrid() {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    const tbody = empTable.querySelector('tbody'); tbody.innerHTML = ''

    // Clear existing rows

    // LOOP THROUGH THE ARRAY OF EMPLOYEES

    for (const employee of employees) {

    // REBUILDING THE ROW STRUCTURE

    const row = ` 
        <tr> 
            <td>${employee.id}</td> 
            <td>${employee.name}</td> 
            <td>${employee.extension}</td> 
            <td>${employee.email}</td> 
            <td>${employee.department}</td> 
            <td><button onclick="deleteEmployee(${employee.id})">Delete</button></td> 
        </tr> `

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    tbody.innerHTML += row; }

    // UPDATE EMPLOYEE COUNT

    empCount.textContent = employees.length

    // STORE THE ARRAY IN STORAGE

    localStorage.setItem('employees', JSON.stringify(employees)) 
}