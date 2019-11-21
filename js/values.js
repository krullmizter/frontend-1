document.getElementById("calculate").addEventListener("click", changeValues);
document.getElementById("calculate").addEventListener("click", ssn);

function changeValues() {
  
    let nameInput   = document.getElementById("nameInput").value
    let nameSplit   = nameInput.split(" ").reverse().join(" ");
    let nameResult  = document.getElementById("nameResult");

    nameResult.style.textTransform = "capitalize";

    nameResult.innerHTML = nameSplit;

    // Amount

    let amountInput = document.getElementById("amountInput").value;
    document.getElementById("amountResult").innerHTML = amountInput;

    // Interest

    let interestInput = document.getElementById("interestInput").value;
    document.getElementById("interestResult").innerHTML = interestInput;

    // Time

    let timeInput = document.getElementById("timeInput").value;
    document.getElementById("timeResult").innerHTML = timeInput;

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

function ssn() {    

    const INPUT          = document.getElementById("ssnInput").value;
    const SPLIT          = INPUT.match(/.{1,2}/g);
    const SPLITALL       = INPUT.match(/.{1}/g);
    const INPUTLENGHT    = INPUT.length;
    const INPUTTOGHETER  = (SPLITALL[0] + SPLITALL[1] + SPLITALL[2] + SPLITALL[3] + SPLITALL[4] + SPLITALL[5] + SPLITALL[7] + SPLITALL[8] + SPLITALL[9]) % 31; // sry lång kod xD
    const GENDER         = SPLITALL[9];
    const CONTROLNUMS    = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"];
    const CONTOLTOTAL    = CONTROLNUMS[INPUTTOGHETER];
    const INPUTMONTH     = SPLIT[1];

    if (SPLIT[0] <= 0 || SPLIT[0] >= 31 || SPLIT[1] <= 0 || SPLIT[1] > 12  || SPLIT[2] < 0 || INPUTLENGHT < 11) {

        document.getElementById("ssnResult").innerHTML = "Faulty SSN!";

    } else {

        document.getElementById("ssnResult").innerHTML = INPUT;

        if (GENDER % 2) {

            document.getElementById("ectInfo").innerHTML = "(He is a Male)";
        
        } else {

            document.getElementById("ectInfo").innerHTML = "(She is a Female)";
        
        }

    }
    
    /*
    const PATTERN    = /^[0-9]{2}[0-9]{2}[0-9]{2}[-+A][0-9]{3}[0-9, A-Y]{1}$/;
    const INPUTSPLIT = INPUT.split(/[-+A]/);
    /^[1-9]{2}[0-9]{6}[-+A][0-9]{3}[0-9, A-Y]{1}$/

    if (INPUTSPLIT[0] == 000000) {

        document.getElementById("ssnResult").innerHTML = "Wrong SSN";

    } else if (INPUT.match(PATTERN)) {

        document.getElementById("ssnResult").innerHTML = INPUT;

    }

    console.log(INPUTSPLIT);

    /^[0-9]{6}\-?[0-9]{3}\-?[0-9]{4}$/
    /^[0-9]{6}\-?\+?\[A][0-9]{3}[0-9, A-Y]{1}$/
    */
}
