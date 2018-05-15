
function Person(name,surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype.getFullName = function () {
    return this.name + this.surname;
}

function Employee(name, surname, job, salary){
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function() {
    return this.getFullName() + this.salary;
}
Employee.prototype.getSalary = function (){
    return this.salary;
}
Employee.prototype.increaseSalary = function(){
    return this.salary*=1.1;
}
function Developer (name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function(){
    return this.specialization;
}

function Manager (name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function(){
    return this.department;
}
Manager.prototype.changeDepartment = function(depart){
    return this.department = depart;
}

var jovica = new Person("Jovica", "Krivosija");
var employee1 = new Employee("Jovica", "Krivosija" , "programmer", 2000);
var developerJS = new Developer("Jovica", "Krivosija" , "programmer", 2000, "JS");
var manager1 = new Manager ("Marko", "Nikolic", "manager", 1400, "HR");

manager1.changeDepartment("dgh");
developerJS.increaseSalary();
console.log(developerJS.getSalary());
