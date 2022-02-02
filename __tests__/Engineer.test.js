// connect Manager.test to Manager file
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () =>{
    const engineer = new Engineer('Carla', 30, "carla@fakemail.com", "https://github.com/Carla");

    expect(engineer.name).toBe('Carla');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    expect((engineer.getRole())).toBe("Engineer");
});