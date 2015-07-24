app.service("taskService", ['$q', 'restService', function ($q, restService) {


    this.getTasks = function () {
        var deferred = $q.defer();

        restService.get('tasks', function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.updateTask = function(task) {
        var deferred = $q.defer();

        restService.post('task', task, function (data) {

            deferred.resolve();
        });

        return deferred.promise;
    };


}]);