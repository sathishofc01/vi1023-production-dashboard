function login(){
var pass=document.querySelector("input[type='password']").value;

if(pass=="VIS@123"){
window.location="dashboard.html";
}
else{
alert("Wrong Password");
}
}
