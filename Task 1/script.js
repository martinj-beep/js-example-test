// Parašykite JavaScript kodą, kuris leistų vartotojui įvesti temperatūrą laipsniais Celsijaus ir
// matyti jos konversiją į:

//     Farenheitus (°F) | Formulė: °F = (°C * 9/5) + 32
//     Kelvinus (K) | Formulė: K = °C + 273.15

// Pastaba: Rezultatai turi būti matomi formoje su įvesties lauku ir mygtuku,
// ir rezultatai turi būti rodomi viduje <div id="output"></div> elemente.
// Užtikrinkite, kad naudotojo sąsaja turėtų bent minimalų stilių.

const button = document.querySelector("#submit-btn");
const input = document.querySelector("#search").value;

console.log(input);

// button.addEventListener("click", fahrenheit());

// function fahrenheit(input) {
//     const f = (input * 9/5) + 32;
//     const k = input + 273.15;
//     return
// }