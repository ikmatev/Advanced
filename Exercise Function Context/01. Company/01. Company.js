class Company{
    constructor(){
        this.departments = [] 
    }
    addEmployee(username, salary, position, department){
        if ([...arguments].every( a => a !== '' && a !== null && a !== undefined && salary >= 0)) {
            const person = {
                username: username,
                salary: salary,
                position: position,
                department: department
            }
            let indexOfcurrentDepartment = this.departments.findIndex( a => a.department === department);
            if (indexOfcurrentDepartment !== -1) {
                this.departments[indexOfcurrentDepartment].employees.push(person);
                this.departments[indexOfcurrentDepartment].departmentBudget += salary;
            }else{
                const newDepartment = {
                    department: department,
                    employees: [person],
                    departmentBudget: salary,
                    averageSalary() { return this.departmentBudget / this.employees.length}
                }
                this.departments.push(newDepartment);
            }
            console.log(`New employee is hired. Name: ${username}. Position: ${position}`);
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }else{
            throw new Error('Invalid input!');
        }
    }
    bestDepartment(){
        let result = '';
        const sortedByAverageSalary = this.departments.sort((a, b) => b.averageSalary() - a.averageSalary());
        sortedByAverageSalary.forEach( a => a.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)));
        result += `Best Department is: ${sortedByAverageSalary[0].department}`;
        result += `\nAverage salary: ${sortedByAverageSalary[0].averageSalary().toFixed(2)}`;
        sortedByAverageSalary[0].employees.forEach( b => result +=`\n${b.username} ${b.salary} ${b.position}`);
        return result;
    }
}

let c = new Company();
let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

