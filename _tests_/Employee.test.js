const Employee = require('../lib/Employee')

test("Object creation from Employee constructor function", () => {
    const employee = new Employee("Josh", 01, "josh@email.com");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    }
)


test('retrieve employee id', () => {
        const employee = new Employee("Josh", 01, "josh@email.com");

        expect(employee.getName()).toEqual(expect.any(String));
    }
)

test('retrieve employee email', () => {
        const employee = new Employee("Josh", 01, "josh@email.com");

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    }
)

test('retrieve "Employee"', () => {
        const employee = new Employee("Josh", 01, "josh@email.com");

        expect(employee.getRole()).toEqual(expect.ant(String));
    }
)
