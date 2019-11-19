function changeValues() {
  
    var nameInput = document.getElementById("nameInput").value
    var nameSplit = nameInput.split(" ").reverse().join(" ");
    
    nameResult.style.textTransform = "capitalize";

    nameResult.innerHTML = nameSplit;

    //

    var amountInput = document.getElementById("amountInput").value;
    document.getElementById("amountResult").innerHTML = amountInput;

    //

    var interestInput = document.getElementById("interestInput").value;
    document.getElementById("interestResult").innerHTML = interestInput;

    //

    var timeInput = document.getElementById("timeInput").value;
    document.getElementById("timeResult").innerHTML = timeInput;

    //

    var colorInput = document.getElementById("colorInput").value;
    document.getElementById("contract").style.backgroundColor = colorInput;
}

function ssn() {

    var ssnInput = document.getElementById("ssnInput").value;
    var pattern = new RegExp("/^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/");
}