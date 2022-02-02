// connect Manager.test to Manager file
const Intern = require('../lib/Intern.js');

test('creates an intern object', () =>{
    const intern = new Intern('Samual', 54, "sam@fakemail.com", "UND");

    expect(intern.name).toBe('Samual');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

    expect((intern.getRole())).toBe("Intern");
});