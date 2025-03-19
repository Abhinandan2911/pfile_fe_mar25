const c = 'A'; // Example character

const isAlpha = /^[a-zA-Z]$/.test(c);
const isAlnum = /^[a-zA-Z0-9]$/.test(c);
const isDigit = /^[0-9]$/.test(c);

if (isAlpha) {
    console.log(`${c} is an alphabet.`);
} else {
    console.log(`${c} is not an alphabet.`);
}

if (isAlnum) {
    console.log(`${c} is alphanumeric.`);
} else {
    console.log(`${c} is not alphanumeric.`);
}

if (isDigit) {
    console.log(`${c} is a digit.`);
} else {
    console.log(`${c} is not a digit.`);
}