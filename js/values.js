document.getElementById("calculate").addEventListener("click", changeValues);
document.getElementById("calculate").addEventListener("click", ssn);

function changeValues() {
  
    let nameInput = document.getElementById("nameInput").value
    let nameSplit = nameInput.split(" ").reverse().join(" ");
    let nameResult = document.getElementById("nameResult");
    
    nameResult.style.textTransform = "capitalize";

    nameResult.innerHTML = nameSplit;

    //

    let amountInput = document.getElementById("amountInput").value;
    document.getElementById("amountResult").innerHTML = amountInput;

    //

    let interestInput = document.getElementById("interestInput").value;
    document.getElementById("interestResult").innerHTML = interestInput;

    //

    let timeInput = document.getElementById("timeInput").value;
    document.getElementById("timeResult").innerHTML = timeInput;

    //

    let colorInput = document.getElementById("colorInput").value;
    document.getElementById("contract").style.backgroundColor = colorInput;
}

function ssn() {

    let ssnInput = document.getElementById("ssnInput").value;
    let pattern = new RegExp("/^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/");
}
