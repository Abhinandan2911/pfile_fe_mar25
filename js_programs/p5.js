let employees = [
    {name:'dravid',sal:20000},
    {name:'rohit',sal:30000},
    {name:'dhoni',sal:25000}
];
let totalSal = employees.reduce((sum, emp) => {
    return sum + emp.sal
}, 0)
console.log("total salary = ",totalSal)