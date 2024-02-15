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
        deleteButton.addEventListener('click', () => deleteEmployee(item.id)); // Adding event listener
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
var names;
var id;
const employeeForm = document.getElementById('employeeForm');

    // Add an event listener for the 'submit' event
    employeeForm.addEventListener('submit', function(event) {
        
        // Your custom logic here when the form is submitted
         names = document.getElementById('name').value;
         id = document.getElementById('id').value;

        // Example: Logging the values
        console.log('Name:', names);
        console.log('ID:', id);

        // You can add more code here to handle form submission or any other action you want to perform
        createEmployee();

    });



// TODO


// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees
  const employeeData = {
    name: names,
    id:id
  };
 // Send data to the backend using fetch or Axios
 fetch('http://localhost:3000/api/v1/employee', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(employeeData)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to create employee');
  }
  return response.json();
})
.then(data => {
  // Handle success response from the backend
  console.log('Employee created:', data);
})
.catch(error => {
  // Handle errors
  console.error('Error creating employee:', error.message);
});

fetchEmployees();


}

// TODO
function deleteEmployee (id){
  // get id
  // send id to BE
  // call fetchEmployees
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete employee');
    }
    console.log('Employee deleted successfully');
    // Optionally, you can update the UI or perform other actions here
  })
  .catch(error => console.error(error));


  fetchEmployees();
}

fetchEmployees()
