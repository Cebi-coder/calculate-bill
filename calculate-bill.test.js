describe("calculate bill factory function", function () {

    it('should be able to return the call cost when the call string is entered', function () {


        assert.equal(6.25, totalPhoneBill("call,call,sms"));

    });

    it("should be able to set the sms amount when the string sms is entered", function () {

        assert.equal(0.75, totalPhoneBill("sms"));
    });
    it("should be able to add both sms and call cost to total", function () {

        assert.equal(3.50, totalPhoneBill("call,sms"));
    });

    it("should be able to change total to orange when warning level is reached", function () {
        //let phoneBill = totalPhoneBill();

        //phoneBill.getTotal(20);
        totalPhoneBill("call,call,call,call,call,call,call,call,call,call")
        assert.equal("warning", styleTotalColor());
    });
    it("should be able to change total to red when danger level is reached", function () {

        totalPhoneBill("call,call,call,call,call,call,call,call,call,call,call,call,call,call,call")
        assert.equal("danger", styleTotalColor());
        
    });
});