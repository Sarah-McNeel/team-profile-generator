const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const employee = new Engineer('sarah', 40, 'sarah@gmail.com', 'divetime89');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));

})

test('get the employee role', () => {
    const employee = new Engineer('sarah', 40, 'sarah@gmail.com', 'divetime89');
    expect(employee.getRole()).toEqual('Engineer');
})
