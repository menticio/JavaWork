 var bakcground = document.getElementById("body-background");

function deleteColor(){
    bakcground.classList.add("center");
    bakcground.classList.remove("body-Red" ,"body-Green","body-Blue");
}
function changeColorRed() {
    deleteColor();
    bakcground.classList.add("body-Red");
}

function changeColorGreen() {
    deleteColor();
    bakcground.classList.add("body-Green");
}

function changeColorBlue() {
    deleteColor();
    bakcground.classList.add("body-Blue");
}

butonR.addEventListener("click",changeColorRed );
butonG.addEventListener("click",changeColorGreen );
butonB.addEventListener("click",changeColorBlue );
