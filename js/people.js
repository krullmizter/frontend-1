function people() {

    let firstName = [
        "Samuel",
        "Johannes",
        "Markus",
        "Gabe",
        "Elon",
        "Bill"
    ];
    
    let lastName = [
        "Eriksson",
        "Newell",
        "Musk",
        "Jobs",
        "Hendricks",
        "Tompson"
    ];
        
    const FIRSTNAMES = firstName.join(', ');
    const LASTNAMES = lastName.join(', ');

    const FULLNAME = FIRSTNAMES + LASTNAMES;

    document.getElementById("peopleOutput").innerHTML = FULLNAME;
}