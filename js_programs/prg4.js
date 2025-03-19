const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log('Smallest:', min);
console.log('Biggest:', max);