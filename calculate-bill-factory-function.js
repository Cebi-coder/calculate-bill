var roundedBillTotal = 0
function totalPhoneBill(billString) {

    var billItems = billString.split(",");
    var billTotal = 0;


    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();

        if (billItem === "call") {
            billTotal += 2.75
        }
        else if (billItem === "sms") {
            billTotal += 0.75;

        }
    }
    roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;
}

function getTotal() {
    return roundedBillTotal;
}

function styleTotalColor() {
    if (getTotal() >= 30) {
        return ("danger")
    }
    else if (getTotal() >= 20) {
        return ("warning")
    }

}


