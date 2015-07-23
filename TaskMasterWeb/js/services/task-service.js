app.service("taskService", ['$q', 'restService', function ($q, restService) {


    this.getTasks = function () {
        var deferred = $q.defer();

        restService.get('values/1', function (data) {

            data = [
                { Id: 1, Name: 'Kyle' },
                { Id: 2, Name: 'Ben' }
            ];



            deferred.resolve(data);
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