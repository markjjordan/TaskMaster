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

app.filter("toArray", function () {
    return function (obj) {
        var result = [];
        angular.forEach(obj, function (val, key) {
            result.push(val);
        });
        return result;
    };
});

app.filter('reverse', function () {
    return function (items) {
        return items.slice().reverse();
    };
});


app.filter('XsortByProperty', function () {
    return function (input, attribute, descending, secondary) {
        if (!angular.isObject(input)) return input;
        if (!attribute) {
            return input;
        }
        var array = [];
        for (var objectKey in input) {
            array.push(input[objectKey]);
        }

        array.sort(function (a, b) {
            var alc = a[attribute], blc = b[attribute];

            if (attribute != 'IsBookmarked') {
                alc = a[attribute].toLowerCase(), blc = b[attribute].toLowerCase();
            }

            return alc > blc ? 1 : alc < blc ? -1 : 0;
        });

        if (descending) {
            array.reverse();
        }

        return array;
    }
});

app.filter('sortTasksByDueDate', function () {
    return function (array) {

        if (!array) return [];

        var inProgressTasks = [];
        var completeTasks = [];

        $.each(array, function(index, item) {
            if (item.Status.toLowerCase() == 'completed') {
                completeTasks.push(item);
            } else {
                inProgressTasks.push(item);
            }
        });

        inProgressTasks.sort(function (a, b) {

            if (a.DueDate == null || b.DueDate == null) {
                if (a.DueDate == null) return -1;
                return 1;
            } else {

                if (a.DueDate < b.DueDate) {
                     return -1;
                } else if (a.DueDate > b.DueDate) {
                    return 1;
                }

                return 1;
            }

        });

        completeTasks.sort(function (a, b) {

            if (a.DueDate == null || b.DueDate == null) {
                if (a.DueDate == null) return -1;
                return 1;
            } else {

                if (a.DueDate < b.DueDate) {
                    return -1;
                } else if (a.DueDate > b.DueDate) {
                    return 1;
                }

                return 1;
            }

        });

        var returnArray = inProgressTasks.concat(completeTasks);
        return returnArray;

    }
});

app.filter('sortDocsByModifiedDate', function () {
    return function (array) {

        if (!array) return [];

        return array.sort(function (a, b) {

            if (a.ModifiedDate == null || b.ModifiedDate == null) {
                if (a.ModifiedDate == null) return 1;
                return -1;
            } else {
                if (a.ModifiedDate < b.ModifiedDate) return 1;
                return -1;
            }

        });

    }
});

