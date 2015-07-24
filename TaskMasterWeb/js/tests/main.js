var expect = chai.expect;

describe('function: dateIsoFormat', function() {

    it('should return "11/20/2015"', function () {
        var dateToTest = formatIsoDate(new Date(2015, 10, 20));
        expect(dateToTest).to.equal("11/20/2015");
    });

    it('should return "1/2/2015"', function () {
        var dateToTest = formatIsoDate(new Date(2015, 0, 2));
        expect(dateToTest).to.equal("1/2/2015");
    });

    it('should return nothing', function () {
        var dateToTest = formatIsoDate(null);
        expect(dateToTest).to.equal('');
    });

    it('should return nothing', function () {
        var dateToTest = formatIsoDate('');
        expect(dateToTest).to.equal('');
    });

});

describe('function: tasksFilter', function () {
    var tasks = [];

    beforeEach(function () {
        tasks = [];
        tasks.push({ Title: 'Mow front yard' });
        tasks.push({ Title: 'Fix garage door' });
        tasks.push({ Title: 'Paint bedroom' });
        tasks.push({ Title: 'Vacuum bedroom' });
        tasks.push({ Title: 'Paint bathroom' });
        tasks.push({ Title: 'Fix toilet in bathroom' });
        tasks.push({ Title: 'Clean bedroom' });
    });

    it('should return 0', function () {
        var results = tasksFilter(tasks, 'porch');
        expect(results.length).to.equal(0);
    });

    it('should return 1', function () {
        var results = tasksFilter(tasks, 'front yard');
        expect(results.length).to.equal(1);
    });

    it('should return 2', function () {
        var results = tasksFilter(tasks, 'bathroom');
        expect(results.length).to.equal(2);
    });

    it('should return 3', function () {
        var results = tasksFilter(tasks, 'bedroom');
        expect(results.length).to.equal(3);
    });

   
});

