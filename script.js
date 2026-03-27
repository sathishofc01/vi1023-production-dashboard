function calculateProduction() {

let morningTarget = Number(document.getElementById("morningTarget").value) || 0;
let morningActual = Number(document.getElementById("morningActual").value) || 0;
let morningDowntime = Number(document.getElementById("morningDowntime").value) || 0;

let afternoonTarget = Number(document.getElementById("afternoonTarget").value) || 0;
let afternoonActual = Number(document.getElementById("afternoonActual").value) || 0;
let afternoonDowntime = Number(document.getElementById("afternoonDowntime").value) || 0;

let nightTarget = Number(document.getElementById("nightTarget").value) || 0;
let nightActual = Number(document.getElementById("nightActual").value) || 0;
let nightDowntime = Number(document.getElementById("nightDowntime").value) || 0;


// Totals
let totalTarget = morningTarget + afternoonTarget + nightTarget;
let totalActual = morningActual + afternoonActual + nightActual;
let totalDowntime = morningDowntime + afternoonDowntime + nightDowntime;


// Efficiency
let morningEfficiency = totalPercent(morningActual, morningTarget);
let afternoonEfficiency = totalPercent(afternoonActual, afternoonTarget);
let nightEfficiency = totalPercent(nightActual, nightTarget);


// Display totals
document.getElementById("totalTarget").innerText = totalTarget;
document.getElementById("totalActual").innerText = totalActual;
document.getElementById("totalDowntime").innerText = totalDowntime;


// Display efficiency
document.getElementById("morningEfficiency").innerText = morningEfficiency + "%";
document.getElementById("afternoonEfficiency").innerText = afternoonEfficiency + "%";
document.getElementById("nightEfficiency").innerText = nightEfficiency + "%";

}

function totalPercent(actual, target){
if(target === 0) return 0;
return ((actual / target) * 100).toFixed(1);
}
