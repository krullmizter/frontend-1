function loanCal() {

    var amount   = document.getElementById("amountInput").value;
    var interest = document.getElementById("interestInput").value;
    var time     = document.getElementById("timeInput").value;

    var amount   = parseFloat(amount);
    var interest = parseFloat(interest) / 100 / 12;
    var time     = parseFloat(time) * 12;

    var x = Math.pow(1 + interest, time);
    var monthly = (amount * x * interest) / (x - 1);

    document.getElementById("loanMonthly").innerHTML = monthly.toFixed(2);

    var total = (monthly * time).toFixed(2);
    document.getElementById("loanTotal").innerHTML = total;
}

function dueDate() {

    var paybackInput = Number(document.getElementById("paybackInput").value);

    var today = new Date();
    var paydayDay = today.getDate() + paybackInput;

    if (today.getDay() == 6 || today.getDay() == 0) {

        var payday = (paydayDay +1) + '.' + (today.getMonth() +1) + '.' + today.getFullYear();

    } else {

        var payday = (paydayDay) + '.' + (today.getMonth() +1) + '.' + today.getFullYear();  

    } 

    document.getElementById("loanDue").innerHTML = payday;
}

function reference() {

    var ref1 = ref2 = ref3 = Math.floor(Math.random() * 10000);

    var ref4 = Math.floor(Math.random() * 100);

    var refResult = ref1 + '-' + ref2 + '-' + ref3 + '-' + ref4;

    document.getElementById("loanReference").innerHTML = refResult;
}