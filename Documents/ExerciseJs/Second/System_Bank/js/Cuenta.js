class Cuenta {

    constructor() {
        this.saldo = 0;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {

        if (monto > this.saldo) {
            return "No hay suficiente dinero en la cuenta";
        }

        this.saldo -= monto;
        return "Retiro realizado correctamente";
    }

    consultarSaldo() {
        return this.saldo;
    }

}