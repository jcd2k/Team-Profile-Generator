const Manager = require('../lib/Manager');

test('commence', () => {
    it('Synthesizes the Manager object', () => {
        const manager = new Manager("Josh", 01, "josh@email.com", 12);
    
        expect(manager.oNumber).toEqual(expect.any(Number));
    });
});

test('getRole', () => {
    it('retrieves an expected role of "Manager"', () => {
        const manager = new Manager("Josh", 01, "josh@email.com", 12);

        expect(manager.getRole()).toEqual("Manager");
    });
});