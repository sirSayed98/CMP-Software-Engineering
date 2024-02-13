const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const index = employee.findIndex((e) => e.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  employee.splice(index, 1);
  res.status(200).json({ message: 'Employee deleted' });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  // check if the employee exists
  if (employee.find((e) => e.id === req.body.id || e.name === req.body.name)) {
    return res.status(400).json({ message: 'Employee already exists' });
  }
  employee.push(req.body);
  res.status(201).json({ message: 'Employee created' });
};
