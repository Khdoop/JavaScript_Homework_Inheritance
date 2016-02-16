function Employee(name, age, sex, daySalary) {

    Person.call(this, name, age, sex);

    var _daySalary = daySalary;

    this.getDaySalary = function() {
        return _daySalary;
    };

    this.setDaySalary = function(int) {
        _daySalary = int;
    };
}

/**
 *
 * @returns {string}
 */
Employee.prototype.showEmployeeInfo = function() {
    return this.getName() + ' is ' + this.getAge() + ' years old, ' + this.getSex() + '. His/her day salary is ' + this.getDaySalary() + '.';
};

/**
 *
 * @param int
 * @returns {number}
 */
Employee.prototype.calculateOvertime = function(int) {
    return this.getAge() < 18 ? 0 : (this.getDaySalary() / 8) * int * 1.5;
};