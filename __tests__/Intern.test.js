const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const employee = new Intern('sarah', 40, 'sarah@gmail.com', "sarah university");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('get the employee role', () => {
    const employee = new Intern('sarah', 40, 'sarah@gmail.com', "sarah university");
    expect(employee.getRole()).toEqual('Intern');

});