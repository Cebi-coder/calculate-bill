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
});