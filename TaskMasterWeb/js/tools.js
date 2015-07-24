function formatIsoDate(jsonDate) {
    if (!jsonDate) { return ""; }
    var dte = new Date(jsonDate);
    dte = new Date(dte.getTime() + dte.getTimezoneOffset() * 60000);
    return dte.toLocaleDateString();
}

function tasksFilter(tasks, searchText) {
    if (!tasks) return [];

    return tasks.filter(function (task) {

        if (searchText) {
            if (task.Description.toLowerCase().indexOf(searchText.toLowerCase()) == -1) return false;
        }

        return true;
    });

}
