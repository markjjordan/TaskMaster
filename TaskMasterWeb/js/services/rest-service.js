app.service("restService", ['$http', function ($http) {

    var rootUrl = 'http://localhost:58753/api/';

    this.get = function (method, callback) {

        var url = rootUrl + method;

        $http({
            url : url,
            //cache: false,
            //dataType: 'json',
            //contentType: 'application/json',
            //headers: {
            //    'Content-Type': 'application/json'
            //},
        }).success(function (data) {
            alert("HI");
            if (callback) { callback(data) };
        }).error(function( jqXHR, textStatus, errorThrown ) {
        });
    }

    function setHeader(xhr) {

        xhr.setResponseHeader('Access-Control-Allow-Origin', '*');
    }

    this.post = function (method, data, callback) {

        var url = rootUrl + method;

        if (typeof data == "undefined" || data == null) {
            $.ajax({
                url: url,
                method: "POST",
                data: data,
            }).done(function (data) {
                if (callback) {
                    callback(data); };
            }).fail(function (jqXHR, textStatus, errorThrown) {
            });
        } else {
            $.ajax({
                url: url,
                method: "POST",
                contentType: "application/json",
                dataType: "json",
                data: data,
            }).done(function (data) {
                if (callback) {
                    callback(data); };
            }).fail(function (jqXHR, textStatus, errorThrown) {
            });
        }
        
    }


}]);