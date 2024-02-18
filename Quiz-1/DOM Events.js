function ChangeText(id){
    id.innerHTML = "H2 changed";
}

document.getElementById("myBtn").onclick = displaydate;

function displaydate(){
    document.getElementById("demo").innerHTML = Date();
}

function mover(obj){
    obj.innerHTML = "Thank You"
}

function mout(obj){
    obj.innerHTML = "Mouse Over Me"
}

document.getElementById("myBtn").addEventListener("click", displaydate);