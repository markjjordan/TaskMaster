app.service("restService", ['$http', function ($http) {

    var rootUrl = 'http://localhost:58753/api/';

    this.get = function (method, callback) {

        var url = rootUrl + method;

        $http({
            url : url,
        }).success(function (data) {
            if (callback) { callback(data) };
        }).error(function( jqXHR, textStatus, errorThrown ) {
        });
    }

    this.post = function (method, data, callback) {

        var url = rootUrl + method;

        if (typeof data == "undefined" || data == null) {
            $http({
                url: url,
                method: "POST",
                data: data,
            }).success(function (data) {
                if (callback) {
                    callback(data); };
            }).error(function (jqXHR, textStatus, errorThrown) {
            });
        } else {
            $http({
                url: url,
                method: "POST",
                data: data,
            }).success(function (data) {
                if (callback) {
                    callback(data); };
            }).error(function (jqXHR, textStatus, errorThrown) {
            });
        }
        
    }


}]);