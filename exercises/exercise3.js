// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map(item => {
    return item + 10;
});

// 3.2

const user = { name: 'Diego', age: 23 };

const showAge = user => user.age;

console.log(showAge(user));

// 3.3

const name = 'Diego';
const age = 23;

const showUser = (name='Diego', age=18) => ({ name, age });

console.log(showUser(name, age));
console.log(showUser(name));

// 3.4

const promise = () => {
    return new Promise((resolve, reject) => {
        return resolve();
    })
}

