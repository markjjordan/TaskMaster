app.filter('formatIsoDate', function () {
    return function (jsonDate) {
        return formatIsoDate(jsonDate);
    };
});

function formatIsoDate(jsonDate) {
    if (!jsonDate) { return ""; }
    var dte = new Date(jsonDate);
    dte = new Date(dte.getTime() + dte.getTimezoneOffset() * 60000);
    return dte.toLocaleDateString();
}
