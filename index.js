/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let convert = document.getElementById("convert-btn")
let input = document.getElementById("input-btn")
const lengthEl = document.getElementById("length-el")
const volume = document.getElementById("volumeOutput")
const mass = document.getElementById("massOutput")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convert.addEventListener("click", function(){
   let baseV = input.value
   lengthEl.textContent = `${baseV} meter = ${baseV * meterToFeet} feet` 
   volume.textContent = `${baseV} liter = ${baseV * literToGallon} Gallons` 
   mass.textContent = `${baseV} kilo = ${baseV * kiloToPound} Pounds` 

})
