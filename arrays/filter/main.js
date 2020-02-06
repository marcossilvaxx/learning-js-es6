console.time('exec');

const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter(el => el % 2 === 0);

console.log(newArr);

console.timeLog('exec');