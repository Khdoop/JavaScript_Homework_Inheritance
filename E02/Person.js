function Person(name, age, sex) {

    var _name = name;

    var _age = age;

    var _sex = sex;

    this.getName = function() {
        return _name;
    };

    this.setName = function(string) {
        _name = string;
    };

    this.getAge = function() {
        return _age;
    };

    this.setAge = function(int) {
        _age = int;
    };

    this.getSex = function() {
        return _sex;
    };

    this.setSex = function(string) {
        _sex = string;
    };
}

/**
 *
 * @returns {string}
 */
Person.prototype.showPersonInfo = function() {
    return this.getName() + ' is ' + this.getAge() + ' years old, ' + this.getSex() + '.';
};