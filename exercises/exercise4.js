// 4.1

const company = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
}

var { name, address: { city, state } } = company;

console.log(name);
console.log(city);
console.log(state);

// 4.2

function showInfo({ name, age }){
    return `${name} is ${age} years old. `;
}

console.log(showInfo({ name: 'Marcos', age: 18 }));