console.time('exec');

const arr = [1, 2, 3, 4, 5];

const newArr = arr.find(el => el * 2 === 8);

console.log(newArr);

console.timeLog('exec');