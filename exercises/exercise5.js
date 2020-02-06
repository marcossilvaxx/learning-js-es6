// 5.1

const arr = [1, 2, 3, 4, 5, 6];

var [ x, ...y ] = arr;

console.log(x);
console.log(y);

// 5.1.1

function sum(...params){
    return params.reduce((total, item) => {
        return total + item;
    })
}

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2));

// 5.2

const user = {
    name: 'Marcos',
    age: 23,
    address: {
        city: 'CG',
        uf: 'PB',
        country: 'Brazil'
    }
}

const user2 = { ...user, name: 'Gabriel' };

const user3 = { ...user, address: { ...user.address, city: 'Lontras'} };

console.log(user2);
console.log(user3);