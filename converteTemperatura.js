function CelciusParaFahrenheit(){
    var celcius= Number(document.getElementById("temperaturaC").value);
    document.write((celcius*1.8) + 32 + " Fahrenheit"); 
}

function fahrenheitParaCelcius(){
    var Fahrenheit= Number(document.getElementById("temperaturaF").value);
    document.write((Fahrenheit-32)*(5/9) + " Celcius");

} 