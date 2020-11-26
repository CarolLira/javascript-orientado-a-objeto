import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta {
    // atributo estático é igual em todas as instâncias da classe
    static numeroDeContas = 0;
    constructor(agencia, cliente) {
        // referência o método da classe Conta
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContas += 1;
    }

    // método sacar está sobrescrevendo o método da classe Conta
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

// obs: São três níveis de modificadores de acesso
// 1 - público: pode ser acessado em qualquer outro ponto do código e por outras classes;
// 2 - protegido: somente a própria classe e as classes que herdam dela podem acessar o atributo ou método;
// 3 - privado: somente a própria classe em que um atributo ou método foi declarado pode acessá-lo.