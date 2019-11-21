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

// Numbers
const NUMBERS = []; 

for (i = 0; i < 10; i++) {

    NUMBERS.push(Math.floor(Math.random() * 100) + 1)

    NUMBERS.sort(function(a, b){return b-a});

}

document.getElementById("numbers").innerHTML = NUMBERS.toString();