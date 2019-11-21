// Code written by Samuel Granvik ©
// Silence is golden.

// -- Don't reload or send form after submission -- 
document.getElementById("calculate").addEventListener("click", function(event){
    
    event.preventDefault();

});

// -- Calculate decimal numbers -- 
const DECINPUT = document.getElementById("decimalInput");
DECINPUT.addEventListener('input', decimalCal);

function decimalCal() {

    const INPUT     = DECINPUT.value;
    let inputParsed = INPUT.replace(',', '.');
    inputParsed     = parseFloat(inputParsed);
    let inputInt    = Math.floor(inputParsed);

    if (isNaN(inputInt) || INPUT % 1 === 0 ) {

      document.getElementById("decimalResult").innerHTML = "Please enter a valid decimal number";

    } else { 
      
    // Decimal Result

    document.getElementById("decimalResult").innerHTML = inputParsed;

    // Square

    let decimalSquare = inputParsed * inputParsed;
    document.getElementById("decimalSquare").innerHTML = decimalSquare;

    // Root

    let decimalSqrt = Math.sqrt(inputParsed);
    document.getElementById("decimalRoot").innerHTML = decimalSqrt;

    // Inverse

    let decimalInverse = -inputParsed;
    document.getElementById("decimalInverse").innerHTML = decimalInverse;

    // Binary

    let decimalBinary = inputInt.toString(2);
    document.getElementById("decimalBinary").innerHTML = decimalBinary;

    // Octal

    let decimalOctal = inputInt.toString(8);
    document.getElementById("decimalOctal").innerHTML = decimalOctal;

    // Hex

    let decimalHex = inputInt.toString(16);
    document.getElementById("decimalHex").innerHTML = decimalHex;

    }
}

// -- Submit button "calculations" & actions -- 
document.getElementById("calculate").addEventListener("click", loanCal);
document.getElementById("calculate").addEventListener("click", dueDate);
document.getElementById("calculate").addEventListener("click", changeValues);
document.getElementById("calculate").addEventListener("click", ssn);


// -- Inserts inputs into given fields -- 
function changeValues() {
  
    let nameInput   = document.getElementById("nameInput").value;
    let nameSplit   = nameInput.split(" ").reverse().join(" ");
    let nameResult  = document.getElementById("nameResult");
    
    nameResult.style.textTransform = "capitalize";
    nameResult.innerHTML = nameSplit;

    // Amount

    let amountInput = document.getElementById("amountInput").value;
    document.getElementById("amountResult").innerHTML = amountInput + "€";

    // Interest

    let interestInput = document.getElementById("interestInput").value;
    document.getElementById("interestResult").innerHTML = interestInput + "%, ";

    // Time

    let timeInput = document.getElementById("timeInput").value;
    document.getElementById("timeResult").innerHTML = timeInput + " " +"Years";

    // Color changer

    let colorInput = document.getElementById("colorInput").value;
    
    if (colorInput.includes(',')) {

        let array       = colorInput.split(', ');
        let a1          = parseInt(array[0], 10).toString(16);
        let a2          = parseInt(array[1], 10).toString(16);
        let a3          = parseInt(array[2], 10).toString(16); 
        let transparent = parseInt(array[3], 10).toString(16);

        let COLORHEX     = '#' + a1 + a2 + a3;

        document.getElementById("contract").style.backgroundColor = COLORHEX;

        if (array.length > 3) {

            let COLORRGBA = array + transparent;

            if (colorInput.length > 16) {

                if (colorInput.includes('.')) {

                    COLORRGBA = colorInput.replace('.', '0.');

                } 

                document.getElementById("contract").style.backgroundColor = 'rgba(' + COLORRGBA + ')';
            }
        }

    } else {

        document.getElementById("contract").style.backgroundColor = colorInput;

    }
}

// -- Social secuirty number checker -- 
function ssn() {    

    const INPUT          = document.getElementById("ssnInput").value;
    const PATTERN        = /^[0-9]{2}[0-9]{2}[0-9]{2}[-+A][0-9]{3}[0-9, A-Y]{1}$/;
    const SPLIT          = INPUT.match(/.{1,2}/g);
    const SPLITALL       = INPUT.match(/.{1}/g);
    const INPUTLENGHT    = INPUT.length;
    const GENDER         = SPLITALL[9];

    if (PATTERN.test(INPUT) === false || SPLIT[0] <= 0 || SPLIT[0] >= 31 || SPLIT[1] <= 0 || SPLIT[1] > 12  || SPLIT[2] < 0 || INPUTLENGHT < 11) {

        document.getElementById("ssnResult").innerHTML = "Faulty SSN!";

    } else {

        document.getElementById("ssnResult").innerHTML = INPUT;

        if (GENDER % 2) {

            document.getElementById("ectInfo").innerHTML = "(is a Male),";
            document.getElementById("gender").innerHTML = "Mr. ";
        
        } else {

            document.getElementById("ectInfo").innerHTML = "(is a Female),";
            document.getElementById("gender").innerHTML = "Mrs.";
        
        }

    }
}

// -- Loan calcualtions -- 
function loanCal() {

    let amount   = document.getElementById("amountInput").value;
    let interest = document.getElementById("interestInput").value;
    let time     = document.getElementById("timeInput").value;

    amount   = parseFloat(amount);
    interest = parseFloat(interest) / 100 / 12;
    time     = parseFloat(time) * 12;

    const R         = Math.pow(1 + interest, time);
    const MONTHLY   = ((amount * R * interest) / (R - 1)).toFixed(2);
    const TOTAL     = (MONTHLY * time).toFixed(2);

    document.getElementById("loanMonthly").innerHTML = MONTHLY + "€";
    document.getElementById("loanTotal").innerHTML   = TOTAL + "€";
}

// -- The loan due date / payday calculations -- 
function dueDate() {

    const CURRENTDATE = new Date();
    const DATEINPUT   = paybackInput.value;
    const WHOLEDATE   = new Date(DATEINPUT);
    const WEEKDAY     = WHOLEDATE.getDay();
    let date          = WHOLEDATE.getDate();
    let finalDate     = date + '.' + (WHOLEDATE.getMonth() +1) + '.' + WHOLEDATE.getFullYear();

    if (CURRENTDATE > WHOLEDATE) {
        
        document.getElementById("loanDue").innerHTML = "Pick a future date!";

    } else {

        if (WEEKDAY == 6) {

            finalDate = (date + 2) + '.' + (WHOLEDATE.getMonth() +1) + '.' + WHOLEDATE.getFullYear();
    
        } else if (WEEKDAY === 0) {

            finalDate = (date + 1) + '.' + (WHOLEDATE.getMonth() +1) + '.' + WHOLEDATE.getFullYear();
    
        }

        document.getElementById("loanDue").innerHTML = finalDate;
    }
}

// -- Reference caluclation -- 
const REF1      = [Math.floor(Math.random() * (9999 - 1000) + 1000)].toString();
const REF2      = [Math.floor(Math.random() * (9999 - 1000) + 1000)].toString();
const REF3      = [Math.floor(Math.random() * (9999 - 1000) + 1000)].toString();
const JOINARRAY = (REF1 + REF2 + REF3).split('');
const MULTI     = [1, 3, 7];

let controlNum = 0;

for (i = 0; i < JOINARRAY.length; i++) {

    controlNum += JOINARRAY[i] * MULTI[i % 3];

    controlNum = (10 - controlNum % 10) % 10;

}

const REFRESULT = REF1 + '-' + REF2 + '-' + REF3 + '-' + controlNum;

document.getElementById("loanReference").innerHTML = REFRESULT;

// -- Random people generator -- 
const FIRSTNAME = [
    "Samuel",
    "Johannes",
    "Markus",
    "Gabe",
    "Elon",
    "Bill",
    "Barack"
];

const LASTNAME = [
    "Eriksson",
    "Newell",
    "Musk",
    "Jobs",
    "Hendricks",
    "Tompson",
    "Lincon",
    "Bagge"
];

const FULLNAME = [];
let splitNames = 0;
const OUTPUT = document.getElementById("peopleOutput");

for (i = 0; i < FIRSTNAME.length; i++) {

    const RANDOM = Math.floor((Math.random() * FIRSTNAME.length));

    FULLNAME[i] = LASTNAME[i] + " " + FIRSTNAME[RANDOM];

}

FULLNAME.sort();

for (i = 0; i < FIRSTNAME.length; i++) {

    splitNames = FULLNAME[i];

    const LISTITEMS = document.createElement('li');
    LISTITEMS.appendChild(document.createTextNode(splitNames));
    OUTPUT.appendChild(LISTITEMS);
}

// -- Numbers hight to low --
const NUMBERS = []; 

for (i = 0; i < 10; i++) {

    NUMBERS.push(Math.floor(Math.random() * 100) + 1);

    NUMBERS.sort(function(a, b){return b-a});

}

document.getElementById("numbers").innerHTML = NUMBERS.toString();