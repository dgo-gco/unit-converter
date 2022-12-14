const units = {
    meter: 3.281,
    liter: 0.264,
    kilo: 2.204
};

const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const metersFeet = document.getElementById('meter-feet');
const litersGallons = document.getElementById('liter-gallon');
const kiloPound = document.getElementById('kilo-pound');


convertBtn.addEventListener("click", function(){ 
    // just one button, just one click to get all the conversion
    let userValue = inputEl.value;
    let metersToFeet = userValue * units.meter;
    let feetToMeters = userValue / units.meter;
    
    //Writing our answers in a single line with template strings
    metersFeet.innerHTML = `<p>${userValue} meters = ${metersToFeet.toFixed(3)} feet | 
    ${userValue} feet = ${feetToMeters.toFixed(3)} meters</p>`
    //toFixed() method rounds the string to a specified number of decimals, in this case I assigned: 3.

    let litersToGallons = userValue * units.liter; //units.liter accessing the liter number from the object units
    let gallonsToLiters = userValue / units.liter;
    
    litersGallons.innerHTML = `<p>${userValue} liters = ${litersToGallons.toFixed(3)} gallons | 
    ${userValue} gallons = ${gallonsToLiters.toFixed(3)} liters</p>`

    let kiloToPounds = userValue * units.kilo;
    let poundsToKilo = userValue / units.kilo;
    
    kiloPound.innerHTML = `<p>${userValue} kilos = ${kiloToPounds.toFixed(3)} pounds | 
    ${userValue} pounds = ${poundsToKilo.toFixed(3)} kilos</p>`
})

