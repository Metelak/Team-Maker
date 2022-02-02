// connect Employee.test to Employee file
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Brenda', 36, "bkeller@fakemail.com");

    expect(employee.name).toBe('Brenda');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    expect((employee.getRole())).toBe("Employee");
});