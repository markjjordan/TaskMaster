app.filter('formatIsoDate', function () {
    return function (jsonDate) {
        return formatIsoDate(jsonDate);
    };
});


