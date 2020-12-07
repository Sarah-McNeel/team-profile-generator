const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Sarah', 40, 'sarah@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get the employee role', () => {
    const employee = new Employee('Sarah', 40, 'sarah@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});
