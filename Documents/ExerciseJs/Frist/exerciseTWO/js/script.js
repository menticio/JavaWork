function suma(params) {
    var nOne = Number(document.getElementById("N1").value);
    var nTwo = Number(document.getElementById("N2").value);

    var sum = nOne + nTwo;

    document.getElementById("result").textContent = " result " + sum;
}