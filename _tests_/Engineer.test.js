const Engineer = require('../lib/Engineer');

test('Commence', () => {
    it('Synthesizes the Engineer object', () => {
        const engineer = new Engineer("Josh", 01, "josh@email.com", "jcd2k");
    
        expect(engineer.github) .toEqual(expect.any(String));
    });
});

test('getGitHub', () => {
    it('retrieves Engineer\'s GitHub profile', () => {
        const engineer = new Engineer("Josh", 01, "josh@email.com", "jcd2k");

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });
});

test('getRole', () => {
    it('retrieves an expected role of "Engineer"', () => {
        const engineer = new Engineer("Josh", 01, "josh@email.com", "jcd2k");

        expect(engineer.getRole()).toEqual("Engineer");
    });
});