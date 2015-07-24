var expect = chai.expect;

describe('test dounble exampples', function() {
    it('should send an email', function() {
        var es = new EmailService();
        var bar = new Bar(es);

        var expectation = sinon.mock(es).expects('send').withArgs('hello');

        bar.somethingThatSendsAnEmail();

        expectation.verify();


    });
});


function Bar(emailService) {

    this.somethingThatSendsAnEmail = function() {
        emailService.send('hello');
    }
    

}

function EmailService() {
   
    this.send = function(msg) {
        
    }
}

function sayHello() {
    return 'hello, world';
}



