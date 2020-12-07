const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const employee = new Manager('sarah', 40, 'sarah@gmail.com', 1111);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('get the employee role', () => {
    const employee = new Manager('sarah', 40, 'sarah@gmail.com', 1111);
    expect(employee.getRole()).toEqual('Manager');

});