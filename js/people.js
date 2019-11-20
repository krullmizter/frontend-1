document.getElementById("calculate").addEventListener("click", people);

function people() {

    const FIRSTNAME = [
        "Samuel",
        "Johannes",
        "Markus",
        "Gabe",
        "Elon",
        "Bill"
    ];
    
    const LASTNAME = [
        "Eriksson",
        "Newell",
        "Musk",
        "Jobs",
        "Hendricks",
        "Tompson"
    ];

    const FULLNAME = [];
    let names = 0;
    
    for (i = 0; i < FIRSTNAME.length; i++) {

        const RANDOM = Math.floor((Math.random() * FIRSTNAME.length));

        FULLNAME[i] = FIRSTNAME[i] + " " + LASTNAME[RANDOM];

        names = FULLNAME.join(", ");
    }

    document.getElementById("peopleOutput").innerHTML = names;
}