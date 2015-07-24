app.controller("TaskCtrl", ['$scope', '$q', 'taskService', function ($scope, $q, taskService) {

    $scope.openedTask = null;

    $scope.init = function() {
        $scope.loadTasks();
    };

    $scope.loadTasks = function() {
        taskService.getTasks().then(function(tasks) {
            $scope.tasks = tasks;
        });
    };

    $scope.createTask = function() {

    };

    $scope.editTask = function () {
        $scope.openedTask = angular.copy(this.task);
    };

    $scope.saveTask = function() {
        taskService.post('task', $scope.openedTask, function(task) {
            $scope.refreshTask(task);
        });
    };

    $scope.refreshTask = function(task) {
        $.each($scope.tasks, function(index, item) {
            if (item.Id == task.Id) {
                $scope.tasks[index] = task;
            };
        });
    };


}]);
