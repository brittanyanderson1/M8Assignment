// CREATE ANA ARRAY OF EMPLOYEES
let employees = [
    { id: 70001234, name: 'Jack Smith', extension: 1111, email: 'jsmith@disney.com', department: 'Marketing' },
    { id: 70001235, name: 'Ham Burgler', extension: 1112, email: 'hburglerh@mcdonalds.com', department: 'Sales' },
    { id: 70001236, name: 'Homer Simpson', extension: 1113, email: 'hsimpson@springfieldnuclearplant.com', department: 'Engineering' },
    { id: 70001237, name: 'Fraiser Crane', extension: 1114, email: 'imlistening@Seattle.com', department: 'Quality Assurance' },
    { id: 70001238, name: 'Tony Stark', extension: 1115, email: 'ironman@thedisneycorporation.com', department: 'Executive' }
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
const empTable = document.querySelector('#empTable tbody')
const empCount = document.querySelector('#empCount')
const form = document.querySelector('#addForm')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    buildTable()
    document.querySelector('#id').focus()
})

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // Prevent form submission
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    const empId = document.querySelector('#id').value
    const empName = document.querySelector('#name').value
    const empExt = document.querySelector('#extension').value
    const empEmail = document.querySelector('#email').value
    const empDept = document.querySelector('#department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmp = { id: parseInt(empId), name: empName, extension: parseInt(empExt), email: empEmail, department: empDept }

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp)

    // BUILD THE GRID
    buildTable()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
         // CONFIRM THE DELETE
        if (confirm('Click "OK" to confirm you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const rowListItem = e.target.parentNode.parentNode.rowListItem - 1

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowListItem, 1)

            // BUILD THE GRID

            buildTable()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildTable() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.innerHTML = ''
    
    // REBUILD THE TBODY FROM SCRATCH
   
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
    // BIND THE TBODY TO THE EMPLOYEE TABLE
        let row = document.createElement('tr')
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
        `
        empTable.appendChild(row)
    }

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `Count: ${employees.length}`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
}