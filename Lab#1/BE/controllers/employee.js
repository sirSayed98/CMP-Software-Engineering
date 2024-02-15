const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {

  const id = req.params.id;
console.log(id);
for (let i = 0; i < employee.length; i++) {
  if (employee[i].id === id) {
    employee.splice(i, 1);
    break; // Exit the loop once the element is removed
  }
}

};

// TODO
exports.createEmployee = async (req, res, next) => {

// // const { name,id } = req.body;
// console.log("hi")
// console.log(req.body.id)
const newEmployee = { id: req.body.id, name: req.body.name };
employee.push(newEmployee);
};
