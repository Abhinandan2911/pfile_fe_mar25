let n=1234;
console.log('Given number is :',n)
let ld,sum=0;
while(n!=0)
{
    ld = n % 10;
    sum = sum+ ld;
    n = Math.floor(n / 10);
}
console.log('Sum = ',sum);