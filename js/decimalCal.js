document.getElementById("calculate").addEventListener("click", decimalCal);

function decimalCal() {

    var input = Number(document.getElementById("decimalInput").value);

    inputFloat = parseFloat(input);
    inputInt   = parseInt(input);

    console.log(inputInt);

    if (isNaN(inputFloat) || inputFloat % 1 == 0) {

      document.getElementById("decimalResult").innerHTML = "Please enter a valid decimal number";

    } else { // Decimal Result

        document.getElementById("decimalResult").innerHTML = inputFloat;

        // Square

        let decimalSquare = inputFloat * inputFloat;
        document.getElementById("decimalSquare").innerHTML = decimalSquare;

        // Root

        let decimalSqrt = Math.sqrt(inputFloat);
        document.getElementById("decimalRoot").innerHTML = decimalSqrt;

        // Inverse

        let decimalInverse = -inputFloat;
        document.getElementById("decimalInverse").innerHTML = decimalInverse;

        // Binary

        let decimalBinary = inputInt;
        decimalBinary.toString(2);

        document.getElementById("decimalBinary").innerHTML = decimalBinary;

        // Octal

        let decimalOctal = inputInt;
        decimalOctal.toString(8);

        document.getElementById("decimalOctal").innerHTML = decimalOctal;

        // Hex

        let decimalHex = inputInt;
        decimalHex.toString(16);

        document.getElementById("decimalHex").innerHTML = decimalHex;
    }
}