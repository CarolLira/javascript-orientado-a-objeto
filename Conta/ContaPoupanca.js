import {Conta} from "./Conta.js";

// extends Conta faz com que a classe ContaPoupanca herda as propriedades e métodos da classe Conta
export class ContaPoupanca extends Conta {
    constructor(saldoInicial, agencia, cliente) {
        super(saldoInicial, agencia, cliente);
    }

    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}