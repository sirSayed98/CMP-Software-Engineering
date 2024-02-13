function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
// when the sumbit button is clicked, call createEmployee
form = document.getElementById('employeeForm')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  createEmployee()
})

// TODO
// add event listener to delete button
table = document.getElementById('dataTable')
table.addEventListener('click', (e) => {
  if (e.target.textContent === 'Delete') {
    deleteEmployee()
  }
})
// TODO
function createEmployee (){
  // get the name 
  form = document.getElementById('employeeForm')
  const name = form.name.value
  const id = form.id.value
  // send name to BE 
  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, id })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      fetchEmployees()
    })
    .catch(error => console.error(error))

}

// TODO
function deleteEmployee (){
  // get id
  // send id to BE
  // call fetchEmployees
  e = window.event
  const id = e.target.parentElement.parentElement.firstChild.textContent
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      fetchEmployees()
    })
    .catch(error => console.error(error))
}

fetchEmployees()
