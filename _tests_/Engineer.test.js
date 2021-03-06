const Engineer = require('../lib/Engineer');

test('Synthesis of an Engineer object', () => {
        const engineer = new Engineer("Josh", 01, "josh@email.com", "jcd2k");
    
        expect(engineer.github) .toEqual(expect.any(String));
    }
)

test('retrieve Engineer\'s GitHub profile', () => {
        const engineer = new Engineer("Josh", 01, "josh@email.com", "jcd2k");

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    }
)

test('retrieve an expected role of "Engineer"', () => {
    const engineer = new Engineer("Josh", 01, "josh@email.com", "jcd2k");

    expect(engineer.getRole()).toEqual("Engineer");
    }
)