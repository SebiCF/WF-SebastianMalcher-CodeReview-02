window.onload = function() { /* enables enter on press to call function*/
    document.getElementById("horsePower").addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("onEnter").click();
        }
    });
}

function calculateInsurance() {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let country = document.getElementById("country").value;
    let hp = parseInt(document.getElementById("horsePower").value);
    let insurance;
    document.getElementById("calcResult").style.visibility = "visible";
    try {
        if (name === "") throw "Name ";
    } catch (err) {
        document.getElementById("calcResult").innerHTML = err + "can not be empty!";
    }

    if (country == "Austria") {
        insurance = hp * 100 / age + 50;
    } else if (country == "Hungary") {
        insurance = hp * 120 / age + 100;
    } else if (country == "Greece") {
        insurance = hp * 150 / (age + 3) + 50;
    }
    let uppername = capitalizeFirstChar(name);
    document.getElementById("calcResult").innerHTML = uppername + ", your insurance costs " + insurance + "€.";

    try {
        if (isNaN(insurance)) throw "Age or Horsepower ";
    } catch (err) {
        document.getElementById("calcResult").innerHTML = err + "can not be empty!";
    }
}

function capitalizeFirstChar(name) {
    uppername = name[0].toUpperCase() + name.substring(1);
    return uppername;
}






/*Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

For Austria : insurance = horse_power x 100 / age   + 50;

For Hungary: insurance = horse_power x 120 / age  + 100;

For Greece: insurance = horse_power x 150 / (age+3)  + 50;*/