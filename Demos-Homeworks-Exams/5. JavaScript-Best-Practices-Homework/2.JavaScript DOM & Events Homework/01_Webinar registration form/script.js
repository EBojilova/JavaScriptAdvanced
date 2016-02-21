var invoiceDetails = document.getElementById('invoiceDetails');
var checkBoxInvoice = document.getElementById('invoice');

checkBoxInvoice.onchange = function() {
    if (checkBoxInvoice.checked) {
        invoiceDetails.style.visibility = 'visible';
    } else {
        invoiceDetails.style.visibility = 'hidden';
    }
};