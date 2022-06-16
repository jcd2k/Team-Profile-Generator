const Employee = require('../lib/Employee')

test('Employee', () => {

   test("commence", () => {
        it("Expects object creation from Employee constructor function", () => {
            const employee = new Employee("Josh", 01, "josh@email.com");
            expect(employee.name).toEqual(expect.any(String));
            xpect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });
})

test('getId', () => {
    it('retrieves employee id', () => {
        const employee = new Employee("Josh", 01, "josh@email.com");

        expect(employee.getName()).toEqual(expect.any(String));
    });
});

test('getEmail', () => {
    it('retrieves employee email', () => {
        const employee = new Employee("Josh", 01, "josh@email.com");

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });
});

test('getRole', () => {
    it('retrieves "Employee"', () => {
        const employee = new Employee("Josh", 01, "josh@email.com");

        expect(employee.getRole()).toEqual(expect.ant(String));
    });
});

