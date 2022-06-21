const Intern = require('../lib/Intern');

test('Synthesis of an Intern object', () => {
        const intern = new Intern("Josh", 01, "josh@email.com", "OSCU");
    
        expect(intern.school) .toEqual(expect.any(String));
    }
)

test('retrieve Engineer\'s GitHub profile', () => {
        const intern = new Intern("Josh", 01, "josh@email.com", "OSCU");

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    }
)

test('retrieve an expected role of "Intern"', () => {
        const intern = new Intern("Josh", 01, "josh@email.com", "OSCU");

        expect(intern.getRole()).toEqual("Intern");
    }
)