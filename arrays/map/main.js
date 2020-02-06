console.time('exec');

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(el => {
    return el * 2
});

console.log(newArr);

console.timeLog('exec');