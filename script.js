// Add the funtion to convert temperature from Celsius to Fahrenheit
function temperature() {
    //To convert celsius to fahrenheit
    // (CEL* 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32 //82.4
    document.getElementById("fahrenheit").value = f;
    document.getElementById("showFahrenheit").innerHTML = f;
}
function weight(element) {
    // if a user enters Kilograms do a calculation for that
    let userInput = parseFloat(element.value);
    let result = 0;
    // Check which ID triggered the function
    if(element.id === "kilo"){
    // To convert KGs to Pounds
    // kG * 2.2
    result = userInput * 2.2;
    document.getElementById("pounds").value = result;
    document.getElementById("weightResults").innerHTML = result;
    }
    else if (element.id === "pounds") {
    // To convert Pounds to KG
    // P / 2.2
    result = userInput / 2.2;
    document.getElementById("kilo").value = result;
    }
}
function distance() {
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m;
}
