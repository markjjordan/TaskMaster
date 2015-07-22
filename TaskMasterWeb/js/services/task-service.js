app.service("taskService", ['$q', function ($q) {


    this.getTasks = function () {
        var deferred = $q.defer();

        setTimeout(function() {

            var data = [
                {Project: 'Proj A', Description: 'Desc A'},
                {Project: 'Proj B', Description: 'Desc B'},
                {Project: 'Proj C', Description: 'Desc C'}
            ];

            deferred.resolve(data);


        }, 5000);

        return deferred.promise;
    };

}]);