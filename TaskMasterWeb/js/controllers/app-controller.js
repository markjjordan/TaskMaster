app.controller("appCtrl", ['$scope', '$q', 'taskService',
function ($scope, $q, taskService) {

   
    $scope.init = function () {

        taskService.getTasks().then(function(tasks) {
            $scope.tasks = tasks;
        });


    }


}]);
