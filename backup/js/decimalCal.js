function decimalCal() {

    // Take the input number and assign it to a var

    var decimalInput = document.getElementById("numberDecimal").value;

    // Check if input is decimal number

    if (typeof decimalInput != 'number' && decimalInput % 1 == 0) {

        document.getElementById("decimalResult").innerHTML = "Please enter a decimal number";

    } else { // Decimal Result

        document.getElementById("decimalResult").innerHTML = decimalInput;

        // Square

        var decimalSquare = decimalInput * decimalInput;
        document.getElementById("decimalSquare").innerHTML = decimalSquare;

        // Root

        var decimalSqrt = Math.sqrt(decimalInput);
        document.getElementById("decimalRoot").innerHTML = decimalSqrt;

        // Inverse

        var decimalInverse = -decimalInput;
        document.getElementById("decimalInverse").innerHTML = decimalInverse;

        // Binary

        var decimalBinary = decimalInput;

        decimalBinary = parseInt(decimalBinary, 2);

        document.getElementById("decimalBinary").innerHTML = decimalBinary;

        // Octal

        var decimalOctal = decimalInput;
        document.getElementById("decimalOctal").innerHTML = decimalOctal;

        // Hex

        var decimalHex = decimalInput;
        document.getElementById("decimalHex").innerHTML = decimalHex;

    }
}