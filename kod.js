function ell() {

    if (document.getElementById("gomb35").checked ||
    document.getElementById("gomb45").checked ||
    document.getElementById("gomb55").checked ||
    document.getElementById("gomb65").checked ) {
        if (document.getElementById("gomb45").checked) {
            document.getElementById("eredmeny").innerHTML = "Jó válasz!";
        } else {
            document.getElementById("eredmeny").innerHTML = "Nem jó válasz!";
        }
    } else {
        document.getElementById("eredmeny").innerHTML = "Nem jelölt ki semmit";
    }



}