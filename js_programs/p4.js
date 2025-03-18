let employees = [
    {name:'dravid',sal:20000},
    {name:'rohit',sal:30000},
    {name:'dhoni',sal:25000}
];

let filteredEmps = employees.filter((emp) => {
    return emp.sal <= 25000
})
console.log(filteredEmps)