// Add the funtion to convert temperature from Celsius to Fahrenheit
function temperature() {
    //To convert celsius to fahrenheit
    // (CEL* 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f;
}

