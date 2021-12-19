function getTempInFahrenheit(tempInCelsius){

    let tempInFahrenheit = (tempInCelsius * 9/5) + 32;
    return tempInFahrenheit;
}

function getTempInCelsius(tempInFahrenheit){
    
    let tempInCelsius = (tempInFahrenheit - 32) * 5/9;
    return tempInCelsius;
}

console.log(getTempInFahrenheit(10));
console.log(getTempInCelsius(37));