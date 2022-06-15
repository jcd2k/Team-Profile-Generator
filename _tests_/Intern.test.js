const Intern = require('../lib/Intern');

test('Commence', () => {
    it('Synthesizes the Intern object', () => {
        const intern = new Intern("Josh", 01, "josh@email.com", "OSCU");
    
        expect(intern.school) .toEqual(expect.any(String));
    });
});

test('getGitHub', () => {
    it('retrieves Engineer\'s GitHub profile', () => {
        const intern = new Intern("Josh", 01, "josh@email.com", "OSCU");

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    });
});

test('getRole', () => {
    it('retrieves an expected role of "Intern"', () => {
        const intern = new Intern("Josh", 01, "josh@email.com", "OSCU");

        expect(intern.getRole()).toEqual("Intern");
    });
});