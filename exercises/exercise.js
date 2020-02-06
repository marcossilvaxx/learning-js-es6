const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map(user => user.age);

console.log(ages);

const employees = users.filter(user => user.age >= 18 && user.company === 'Rocketseat');

console.log(employees);

const employeeGoogle = users.find(user => user.company === 'Google');

console.log(employeeGoogle);

const usersMap = users.map(user => ({ ...user, age: user.age * 2 })).filter(user => user.age <= 50);

console.log(usersMap);