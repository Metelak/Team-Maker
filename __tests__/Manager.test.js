// connect Manager.test to Manager file
const Manager = require('../lib/Manager.js');

test('creates a manager object', () =>{
    const manager = new Manager(1);

    expect(manager.office).toEqual(expect.any(Number));

    expect((manager.getRole())).toBe("Manager");
});