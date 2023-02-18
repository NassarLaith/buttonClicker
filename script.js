function signInBtn(element){
    if (element.innerText="Logout"){
        element.innerText="Login"
    }
}

function increasedLike(element){
    if(element.innerText == "13 likes"){
        element.innerText="14 likes";
    }
    else if (element.innerText == "37 likes"){
        element.innerText="38 likes";
    }
}

function addDefintion(element){
    element.remove();
}