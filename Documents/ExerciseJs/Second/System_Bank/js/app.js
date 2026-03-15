let clientes = [];
let clienteActual = null;

function registrarCliente() {

    let nombre = document.getElementById("nombre").value;

    if(nombre === ""){
        document.getElementById("resultado").innerText = "Ingrese un nombre";
        return;
    }

    let nuevoCliente = new Cliente(nombre);

    clientes.push(nuevoCliente);

    clienteActual = nuevoCliente;

    document.getElementById("resultado").innerText =
    "Cliente registrado: " + nombre;
}


function depositar(){

    if(clienteActual === null){
        document.getElementById("resultado").innerText =
        "Primero registre un cliente";
        return;
    }

    let monto = Number(document.getElementById("monto").value);

    clienteActual.cuenta.depositar(monto);

    document.getElementById("resultado").innerText =
    "Depósito realizado. Saldo: " +
    clienteActual.cuenta.consultarSaldo();
}


function retirar(){

    if(clienteActual === null){
        document.getElementById("resultado").innerText =
        "Primero registre un cliente";
        return;
    }

    let monto = Number(document.getElementById("monto").value);

    let mensaje = clienteActual.cuenta.retirar(monto);

    document.getElementById("resultado").innerText =
    mensaje + ". Saldo: " +
    clienteActual.cuenta.consultarSaldo();
}


function consultarSaldo(){

    if(clienteActual === null){
        document.getElementById("resultado").innerText =
        "Primero registre un cliente";
        return;
    }

    document.getElementById("resultado").innerText =
    "Saldo actual: " +
    clienteActual.cuenta.consultarSaldo();
}