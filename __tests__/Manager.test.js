// connect Manager.test to Manager file
const Manager = require('../lib/Manager.js');

test('creates a manager object', () =>{
    const manager = new Manager('Pete', 10, "pete@fakemail.com", 1);

    expect(manager.name).toBe('Pete');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));

    expect((manager.getRole())).toBe("Manager");
});