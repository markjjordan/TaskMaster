app.service("taskService", ['$q', function ($q) {


    this.getTasks = function () {
        var deferred = $q.defer();

        setTimeout(function() {

            var data = [
                {Project: 'Proj A', Description: 'Remember to talk with Roger about travel to Tokyo.'}/*,
                {Project: 'Proj B', Description: 'Desc B'},
                {Project: 'Proj C', Description: 'Desc C'}*/
            ];

            deferred.resolve(data);


        }, 50);

        return deferred.promise;
    };

}]);