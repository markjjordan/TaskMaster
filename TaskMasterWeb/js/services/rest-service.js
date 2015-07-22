app.service("restService", function () {

    var currentRelativeUrl;
    try {
        currentRelativeUrl = _spPageContextInfo.webServerRelativeUrl;
    } catch (k) {
        currentRelativeUrl = "";
    }
    
    var rootUrl = window.location.protocol + "//" + window.location.host + currentRelativeUrl + "/_vti_bin/cdh.whi.clientdashboard/WcfService.svc/";

    this.get = function (method, callback) {

        var url = rootUrl + method;

        $.ajax({
            url: url,
            cache: false,
        }).done(function (data) {
            if (callback) { callback(data) };
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            alertModal(url, "An error has occurred");
        });
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
                alertModal(jqXHR.responseText, "An error has occurred");
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
                alertModal(jqXHR.responseText, "An error has occurred");
            });
        }
        
    }


});