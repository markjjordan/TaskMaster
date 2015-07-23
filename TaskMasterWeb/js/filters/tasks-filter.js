app.filter('tasksFilter', function () {
    return function (items, searchText) {
        if (!items) return [];

        return items.filter(function (activity) {
           
            if (searchText) {
                if (activity.Title.toLowerCase().indexOf(searchText.toLowerCase()) == -1) return false;
            }

            return true;
        });

    };
});