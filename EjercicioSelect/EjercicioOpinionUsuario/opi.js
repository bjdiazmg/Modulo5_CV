var boton = document.getElementById("myBtn");

var usuario = document.getElementById("opinion");

boton.addEventListener("click", showMessage);

function showMessage (){
    opinion.innerHTML = "El usuario ha dicho que"+ usuario;
}



if (event.keyCode === 13){
showResult();
console.log("enter")
}

function showResult(){

document.getElementById("opinion").innerHTML = "el usuario dijo" 
}