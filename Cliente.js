// arquivos de classe começam com letra maiúscula

// classe poderá ser exportada como módulo
export class Cliente {
    // atributos ou propriedades (sinônimos no Javascript)
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf() {
        return this._cpf;
    }

    autenticar(senha) {
        return senha == this._senha;
    }
}

