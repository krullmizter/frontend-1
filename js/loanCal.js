document.getElementById("calculate").addEventListener("click", loanCal);
document.getElementById("calculate").addEventListener("click", dueDate);
document.getElementById("calculate").addEventListener("click", reference);

function loanCal() {

    let amount   = document.getElementById("amountInput").value;
    let interest = document.getElementById("interestInput").value;
    let time     = document.getElementById("timeInput").value;

    amount       = parseFloat(amount);
    interest     = parseFloat(interest) / 100 / 12;
    time         = parseFloat(time) * 12;

    const X = Math.pow(1 + interest, time);
    const MONTHLY = (amount * X * interest) / (X - 1);

    document.getElementById("loanMonthly").innerHTML = MONTHLY.toFixed(2);

    const TOTAL = (MONTHLY * time).toFixed(2);

    document.getElementById("loanTotal").innerHTML = TOTAL;
}

function dueDate() {

    const DATEINPUT = paybackInput.value;
    const WHOLEDATE = new Date(DATEINPUT);
    const WEEKDAY   = WHOLEDATE.getDay();
    let date        = WHOLEDATE.getDate();
    let finalDate   = date + '.' + (WHOLEDATE.getMonth() +1) + '.' + WHOLEDATE.getFullYear();

    if (WEEKDAY === 6 || WEEKDAY === 0) {

        date++;
        finalDate;

    } else {

        finalDate;

    }

    document.getElementById("loanDue").innerHTML = finalDate;

    /*console.log(DATEINPUT);
    console.log(WHOLEDATE);
    console.log(WEEKDAY);
    console.log(date);
    console.log(finalDate);*/

}

function reference() {

    const REF1 = Math.floor(Math.random() * 1000) + 1000;

    const REF2 = Math.floor(Math.random() * 1000) + 1000;

    const REF3 = Math.floor(Math.random() * 1000) + 1000;

    const REF4 = Math.floor(Math.random() * 99) + 10;

    const REFRESULT = REF1 + '-' + REF2 + '-' + REF3 + '-' + REF4;

    document.getElementById("loanReference").innerHTML = REFRESULT;
}
