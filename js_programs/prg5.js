const num = 12345;

const numStr = String(num);
const digits = [];
for (let i = 0; i < numStr.length; i++) {
  const digit = parseInt(numStr[i]);
  let found = false;
  for (let j = 0; j < digits.length; j++) {
    if (digits[j] === digit) {
      found = true;
      break;
    }
  }
  if (!found) {
    digits.push(digit);
  }
}
for (let i = 0; i < digits.length - 1; i++) {
  for (let j = i + 1; j < digits.length; j++) {
    if (digits[i] > digits[j]) {
      const temp = digits[i];
      digits[i] = digits[j];
      digits[j] = temp;
    }
  }
}
const secondSmallest = digits.length > 1 ? digits[1] : undefined;
console.log('2nd Smallest Digit:', secondSmallest);