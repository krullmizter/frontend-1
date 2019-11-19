document.getElementById("calculate").addEventListener("click", decimalCal);

function decimalCal() {

    var input = Number(document.getElementById("decimalInput").value);

    input = parseFloat(input);

    if (isNaN(input) || input % 1 == 0) {

      document.getElementById("decimalResult").innerHTML = "Please enter a valid decimal number";

    } else { // Decimal Result

        document.getElementById("decimalResult").innerHTML = input;

        // Square

        let decimalSquare = input * input;
        document.getElementById("decimalSquare").innerHTML = decimalSquare;

        // Root

        let decimalSqrt = Math.sqrt(input);
        document.getElementById("decimalRoot").innerHTML = decimalSqrt;

        // Inverse

        let decimalInverse = -input;
        document.getElementById("decimalInverse").innerHTML = decimalInverse;

        // Binary

        let decimalBinary = input;

        decimalBinary = parseInt(decimalBinary, 2);

        document.getElementById("decimalBinary").innerHTML = decimalBinary;

        // Octal

        let decimalOctal = input;
        document.getElementById("decimalOctal").innerHTML = decimalOctal;

        // Hex

        let decimalHex = input;
        document.getElementById("decimalHex").innerHTML = decimalHex;
    }
}