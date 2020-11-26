import {Cliente} from "../Cliente.js";

// A Classe Conta deve ser abstrata, ou seja, nunca será instanciada somente herdada
export class Conta {
    // atributos ou propriedades (sinônimos no Javascript)

    constructor(saldoInicial, agencia, cliente) {
        if (this.constructor == Conta) {
            throw new Error('Classe abstrata: não deve ser instanciada');
        }
        // definir atributo como privado (ainda não foi implementado na própria linguagem essa funcionalidade)
        // a proposta diz que deveria ser usado o símbolo '#' -> (#saldo)
        // como não foi aceita ainda é mais comum utilizar o '_' -> (_saldo) para indicar que o atributo é privado
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // métodos da classe

    // Método abstrato, não deve ser chamado diretamente, mas sim sobrescrita
    sacar(valor) {
        throw new Error('Método abstrato');
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            // técnica Early Return
            // caso não atender os critérios, não irá realizar as operações da função
            return;
        }
        this._saldo += valor;
    }

    // valor é um parâmetro de tipo primitivo então é passado como valor, alterações aqui não modificam o valor original
    // conta é um parâmetro de refência, qualquer alteração aqui modifica esse objeto 
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}