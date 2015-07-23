app.service("taskService", ['$q', 'restService', function ($q, restService) {


    this.getTasks = function () {
        var deferred = $q.defer();

        setTimeout(function() {
            deferred.resolve(data = [
                { Id: 1, Name: 'Kyle' },
                { Id: 2, Name: 'Ben' }
            ]);

        });

        restService.get('tasks', function (data) {
            //deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.updateTask = function(task) {
        var deferred = $q.defer();

        restService.post('values', task, function (data) {

            deferred.resolve();
        });

        return deferred.promise;
    };


}]);