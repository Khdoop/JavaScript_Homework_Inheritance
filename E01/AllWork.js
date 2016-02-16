function AllWork() {

    var _tasks = [];

    var _freePlacesForTasks = 10;

    var _currentUnassignedTask = 0;


    this.getTasks = function () {
        return _tasks;
    };

    this.setTasks = function(array) {
        _tasks = array;
    };

    this.getFreePlacesForTasks = function () {
        return _freePlacesForTasks;
    };

    this.setFreePlacesForTasks = function(int) {
        _freePlacesForTasks = int;
    };

    this.geCurrentUnassignedTask = function () {
        return _currentUnassignedTask;
    };

    this.setCurrentUnassignedTask = function(int) {
        _currentUnassignedTask = int;
    };
}

AllWork.prototype.addTask = function(task) {
    this.setTasks(this.getTasks().push(task));
};

AllWork.prototype.isAllWorkDone = function() {

};