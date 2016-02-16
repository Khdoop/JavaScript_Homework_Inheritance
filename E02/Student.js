function Student(name, age, sex, score) {

    Person.call(this, name, age, sex);

    var _score = score;

    this.getScore = function() {
        return _score;
    };

    this.setScore = function(number) {
        _score = number;
    }
}

/**
 *
 * @returns {string}
 */
Student.prototype.showStudentInfo = function() {
    return this.getName() + ' is ' + this.getAge() + ' years old, ' + this.getSex() + '. His/her score is ' + this.getScore() + '.';
};