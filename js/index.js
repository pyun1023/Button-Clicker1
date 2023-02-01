function removeButton( element ){
    element.remove();
}

function login(element){
    if (element.innerText == "Login"){
        element.innerText = "Logoff"
    }
    else {
        element.innerText = "Login"
    }
}

function liked(element){
    alert("Ninja was liked!");
}

