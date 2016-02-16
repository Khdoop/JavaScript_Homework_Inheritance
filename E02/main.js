var people = [
    new Person('Ivan', 23, 'male'),
    new Person('Jessica', 25, 'female'),
    new Student('Jimmy', 16, 'male', 2),
    new Student('Lisa', 15, 'female', 5),
    new Employee('Lenny', 17, 'male', 80),
    new Employee('Maria', 32, 'female', 150)
];

for (var i in people) {
    switch (people[i].constructor.name) {
        case 'Person':
            console.log(people[i].showPersonInfo());
            break;
        case 'Student':
            console.log(people[i].showStudentInfo());
            break;
        case 'Employee':
            console.log(people[i].showEmployeeInfo(), 'Overtime: ' + people[i].calculateOvertime(2));
            break;
        default:
            console.log('This mystical creature does not exist.');
    }
}