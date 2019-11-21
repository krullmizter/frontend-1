document.getElementById("calculate").addEventListener("click", decimalCal);

function decimalCal() {

    const INPUT = document.getElementById("decimalInput").value;

    let inputParsed = INPUT.replace(',', '.');
    let inputInt    = parseInt(inputParsed);

    if (isNaN(inputInt) || INPUT % 1 == 0 ) {

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

    let decimalBinary = inputInt;
    decimalBinary.toString(2);
    
    console.log(decimalBinary);
    /*if (decimalBinary != 0) {
      
      decimalBinary = decimalBinary % 8;

    }*/

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