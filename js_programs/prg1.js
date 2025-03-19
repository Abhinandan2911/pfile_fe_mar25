const prompt = require('prompt-sync')(); // Use this for Node.js input

let n = parseInt(prompt("Enter a number: "), 10); // Specify base 10 for parsing

if (isNaN(n) || n < 1) { // Check if the input is a number and greater than 0
    console.log("Please enter a valid positive integer.");
} else {
    if (n === 1) { // 1 is not a prime number
        console.log("Given number is not a Prime Number.");
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) { // Use strict equality
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("Given number is a Prime Number.");
        } else {
            console.log("Given number is not a Prime Number.");
        }
    }
}