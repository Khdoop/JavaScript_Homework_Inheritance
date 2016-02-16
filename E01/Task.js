function Task(name, workingHours) {

    var _name = name;

    var _workingHours = workingHours;

    this.getName = function() {
        return _name;
    };

    this.getWorkingHours = function() {
        return _workingHours;
    };

    this.setWorkingHours = function(int) {
        _workingHours = int;
    };
}