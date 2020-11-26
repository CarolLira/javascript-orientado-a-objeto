// --Link para propostas de declarações Javascript: https://github.com/tc39/proposal-class-fields#private-fields

import {Cliente} from "./Cliente.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";

// instância da classe Cliente
// definindo valores das propriedades dos objetos
const cliente1 = new Cliente('Carol', 12345678901, '3456');
const diretor = new Diretor('Rodrigo', 10000, 12345678900);
const gerente = new Gerente('Ricardo', 8000, 78945612300);

console.log(cliente1);

// instância da classe ContaCorrente
// definindo valores das propriedades dos objetos no construtor
const contaCorrente = new ContaCorrente(1021, cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1021);

// o atributo #saldo não aparece, pois é privado e só pode ser utilizado dentro da classe
// quando usamos _saldo o atributo volta a aparecer, pois é só uma convenção
contaCorrente.depositar(100);
const valorSacado = contaCorrente.sacar(50);

console.log(contaCorrente);
console.log(contaPoupanca);

// métodos estáticos só podem ser chamados pela própria classe
console.log(`Número de Contas: ${ContaCorrente.numeroDeContas}`);

diretor.cadastrarSenha('123');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123');

gerente.cadastrarSenha('123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '456');

const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, '3456');

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(cliente1EstaLogado);