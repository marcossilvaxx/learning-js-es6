// REST

const user = {
    name: 'Marcos',
    age: 18,
    company: 'Google'
}

const { name, ...rest } = user; 

console.log(name);
console.log(rest);

///////////////////

const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;

console.log(a, b, c);

///////////////////

function sum(...params){
    return params.reduce((total, next) => {
        return total + next;
    })
}

console.log(sum(5, 4, 3, 5));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

/////////////////

const user1 = {
    name: 'Marcos',
    age: 18,
    company: 'Google'
}

const user2 = {...user1, name: 'Carlos'};

console.log(user2);