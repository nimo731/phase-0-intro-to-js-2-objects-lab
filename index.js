// Write your solution in this file!
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Testing the functions
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Alice")); // Changes name to Alice
console.log(deleteFromEmployeeByKey(employee, "streetAddress")); // Returns new object without streetAddress
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")); // Removes streetAddress from original object
