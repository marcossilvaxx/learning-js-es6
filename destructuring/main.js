const user = {
    name: 'Marcos',
    age: 23,
    address: {
        city: 'CG',
        street: 'blablabla',
        number: 123
    }
}

const { name, age, address: { city } } = user;

console.log(name, age, city);

function showName({ name }){
    console.log(name);
}

showName(user);