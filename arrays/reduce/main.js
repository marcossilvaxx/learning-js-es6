console.time('exec');

const arr = [1, 2, 3, 4, 5];

const newArr = arr.reduce((total, next) => {
    return total + next;
})

console.log(newArr);

console.timeLog('exec');