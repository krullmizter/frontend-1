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

    if (WEEKDAY == 6 || WEEKDAY == 0) {

        date++;
        finalDate;

    } else {

        finalDate;

    }

    document.getElementById("loanDue").innerHTML = finalDate;
}

function reference() {

    const REF1      = [Math.floor(Math.random() * (9999 - 1000) + 1000)].toString();
    const REF2      = [Math.floor(Math.random() * (9999 - 1000) + 1000)].toString();
    const REF3      = [Math.floor(Math.random() * (9999 - 1000) + 1000)].toString();
    const JOINARRAY = (REF1 + REF2 + REF3).split("");
    const MULTI     = [1, 3, 7];

    let controlNum = 0;

    for (i = 0; i < JOINARRAY.length; i++) {

        controlNum += JOINARRAY[i] * MULTI[i % 3];

        controlNum = (10 - controlNum % 10) % 10;

    }

    const REFRESULT = REF1 + '-' + REF2 + '-' + REF3 + '-' + controlNum;

    document.getElementById("loanReference").innerHTML = REFRESULT;

    /*
    sum += jointarray[0] * three[0];
    sum += jointarray[1] * three[1];
    sum += jointarray[2] * three[2];
    sum += jointarray[3] * three[0];

    const REF4 = Math.floor(Math.random() * 99) + 10;
    */
}
