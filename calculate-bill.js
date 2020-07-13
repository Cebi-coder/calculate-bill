
const calculateBtn = document.querySelector(".calculateBtn");

const billTotalElement = document.querySelector(".billTotal");

const billStringField = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");



function calculateBtnClicked() {

        var billString = billStringField.value;

        const roundedBillTotal = totalPhoneBill(billString);

        billTotalElement.innerHTML = roundedBillTotal;

        styleTotalColor(roundedBillTotal);

}

calculateBtn.addEventListener("click", calculateBtnClicked);