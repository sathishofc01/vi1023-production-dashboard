function login(){
var pass=document.querySelector("input[type='password']").value;

if(pass=="VIS@123"){
window.location="dashboard.html";
}
else{
alert("Wrong Password");
}
}
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


let totalTarget = morningTarget + afternoonTarget + nightTarget;
let totalActual = morningActual + afternoonActual + nightActual;
let totalDowntime = morningDowntime + afternoonDowntime + nightDowntime;

document.getElementById("totalTarget").innerText = totalTarget;
document.getElementById("totalActual").innerText = totalActual;
document.getElementById("totalDowntime").innerText = totalDowntime;

}
