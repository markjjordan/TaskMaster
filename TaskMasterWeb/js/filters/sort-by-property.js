app.filter('sortByProperty', function () {
    return function (input, priAttribute, priDescending, altAttribute, altDescending) {
        if (!angular.isObject(input)) return input;
        if (!priAttribute) {
            return input;
        }
        var array = [];
        for (var objectKey in input) {
            array.push(input[objectKey]);
        }

        var priDesc = (priDescending ? -1 : 1);
        var altDesc = (altDescending ? -1 : 1);

        array.sort(function (a, b) {
            var alc = "0";
            if (a[priAttribute] != 'undefined' && a[priAttribute] != null) alc = a[priAttribute].toString().toLowerCase();
            var blc = "0";
            if (b[priAttribute] != 'undefined' && b[priAttribute] != null) blc = b[priAttribute].toString().toLowerCase();

            var alc_sec = "0";
            if (typeof altAttribute !== 'undefined') {
                alc_sec = a[altAttribute].toString().toLowerCase();
            };
            var blc_sec = "0";
            if (typeof altAttribute !== 'undefined') {
                blc_sec = b[altAttribute].toString().toLowerCase();
            };


        if (alc > blc) {
                return priDesc;
            } else if (alc < blc) {
                return -priDesc;
            } else {
                // sort by secondary
                if (alc_sec > blc_sec) {
                    return altDesc;
                } else if (alc_sec < blc_sec) {
                    return -altDesc;
                } else {
                    return 0;
                }
            }

        });

        return array;
    }
});
