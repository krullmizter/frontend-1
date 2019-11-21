// Code written by Samuel Granvik ©
// Silence is golden.


// -- Don't reload or send form after submition -- 
document.getElementById("calculate").addEventListener("click", function(event){
    
    event.preventDefault();

});

// -- Submit button "calculations" & actions -- 
document.getElementById("calculate").addEventListener("click", decimalCal);
document.getElementById("calculate").addEventListener("click", loanCal);
document.getElementById("calculate").addEventListener("click", dueDate);
document.getElementById("calculate").addEventListener("click", changeValues);
document.getElementById("calculate").addEventListener("click", ssn);


// -- Calculate decimal numbers -- 
function decimalCal() {

    const INPUT     = document.getElementById("decimalInput").value;
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
    //const INPUTTOGHETER  = (SPLITALL[0] + SPLITALL[1] + SPLITALL[2] + SPLITALL[3] + SPLITALL[4] + SPLITALL[5] + SPLITALL[7] + SPLITALL[8] + SPLITALL[9]) % 31; // sry lång kod xD
    const GENDER         = SPLITALL[9];
    //const CONTROLNUMS    = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"];

    console.log(INPUTTOGHETER, GENDER);

    if (PATTERN.test(INPUT) === false || SPLIT[0] <= 0 || SPLIT[0] >= 31 || SPLIT[1] <= 0 || SPLIT[1] > 12  || SPLIT[2] < 0 || INPUTLENGHT < 11) {

        document.getElementById("ssnResult").innerHTML = "Faulty SSN!";

    } else {

        document.getElementById("ssnResult").innerHTML = INPUT;

        if (GENDER % 2) {

            document.getElementById("ectInfo").innerHTML = "(is a Male)";
        
        } else {

            document.getElementById("ectInfo").innerHTML = "(is a Female)";
        
        }

    }

   /* if (SPLIT[0] <= 0 || SPLIT[0] >= 31 || SPLIT[1] <= 0 || SPLIT[1] > 12  || SPLIT[2] < 0 || INPUTLENGHT < 11) {

        document.getElementById("ssnResult").innerHTML = "Faulty SSN!";

    } else {

        document.getElementById("ssnResult").innerHTML = INPUT;

        if (GENDER % 2) {

            document.getElementById("ectInfo").innerHTML = "(He is a Male)";
        
        } else {

            document.getElementById("ectInfo").innerHTML = "(She is a Female)";
        
        }

    }*/


    /*if (inputtest == false) {

        console.log("Faulty SSN");

    } else {


    }
    
    
    const PATTERN    = /^[0-9]{2}[0-9]{2}[0-9]{2}[-+A][0-9]{3}[0-9, A-Y]{1}$/;
    const INPUTSPLIT = INPUT.split(/[-+A]/);

    if (INPUTSPLIT[0] == 000000) {

        document.getElementById("ssnResult").innerHTML = "Wrong SSN";

    } else if (INPUT.match(PATTERN)) {

        document.getElementById("ssnResult").innerHTML = INPUT;

    }*/

    /*
    console.log(INPUTSPLIT);

    /^[0-9]{6}\-?[0-9]{3}\-?[0-9]{4}$/
    /^[0-9]{6}\-?\+?\[A][0-9]{3}[0-9, A-Y]{1}$/
    

    const CONTOLTOTAL    = CONTROLNUMS[INPUTTOGHETER];
    const INPUTMONTH     = SPLIT[1];

    //var inputtest = INPUT.test(/^[0-9]{2}[0-9]{2}[0-9]{2}[-+A][0-9]{3}[0-9, A-Y]{1}$/);
    */
}

// -- Loan calcualtions -- 
function loanCal() {

    let amount   = document.getElementById("amountInput").value;
    let interest = document.getElementById("interestInput").value;
    let time     = document.getElementById("timeInput").value;

    amount   = parseFloat(amount);
    interest = parseFloat(interest) / 100 / 12;
    time     = parseFloat(time) * 12;

    const X = Math.pow(1 + interest, time);
    const MONTHLY = (amount * X * interest) / (X - 1);

    document.getElementById("loanMonthly").innerHTML = MONTHLY.toFixed(2) + "€";

    const TOTAL = (MONTHLY * time).toFixed(2);

    document.getElementById("loanTotal").innerHTML = TOTAL + "€";
}

// -- The loan due date / payday calculations -- 
function dueDate() {

    const CURRENTDATE = new Date();
    const DATEINPUT   = paybackInput.value;
    const WHOLEDATE   = new Date(DATEINPUT);
    const WEEKDAY     = WHOLEDATE.getDay();
    let date          = WHOLEDATE.getDate();
    let finalDate     = date + '.' + (WHOLEDATE.getMonth() +1) + '.' + WHOLEDATE.getFullYear();

    if (WHOLEDATE < CURRENTDATE) {
        
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

/*
sum += jointarray[0] * three[0];
sum += jointarray[1] * three[1];
sum += jointarray[2] * three[2];
sum += jointarray[3] * three[0];

const REF4 = Math.floor(Math.random() * 99) + 10;
*/

// -- Random people generator -- 
const FIRSTNAME = [
    "Samuel",
    "Johannes",
    "Markus",
    "Gabe",
    "Elon",
    "Bill",
    "Obama"
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

//console.log(i, LASTNAME[i], RANDOM, FIRSTNAME[RANDOM], FULLNAME[i]);
//names = FULLNAME.join(", ");
//document.getElementById("peopleOutput").innerHTML = names;
}

// -- Numbers hight to low --
const NUMBERS = []; 

for (i = 0; i < 10; i++) {

    NUMBERS.push(Math.floor(Math.random() * 100) + 1);

    NUMBERS.sort(function(a, b){return b-a});

}

document.getElementById("numbers").innerHTML = NUMBERS.toString();