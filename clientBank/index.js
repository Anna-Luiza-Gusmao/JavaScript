import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Anna", 12345678923); //usando o constructor
//cliente1.nome = "Anna";
//cliente1.cpf = 12345678923;

const contaCorrenteAnna = new ContaCorrente(2098, cliente1); //usando o constructor
//contaCorrenteAnna.agencia = 2098;
//contaCorrenteAnna.cliente = cliente1;

console.log("Número de contas correntes: ", ContaCorrente.numeroDeContas);

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.agencia = 8769;
contaCorrenteJoao.cliente = new Cliente();
contaCorrenteJoao._cliente.nome = "João Pedro";
contaCorrenteJoao._cliente._cpf = 128890323;

contaCorrenteAnna.depositar(100);
//contaCorrenteAnna.transferir(20, contaCorrenteJoao);
contaCorrenteJoao.depositar(30);
let valor = 20;
contaCorrenteJoao.transferir(valor, contaCorrenteAnna);

//console.log(cliente1);
//console.log("Saldo de Anna: ", contaCorrenteAnna._saldo);

console.log(contaCorrenteAnna);
console.log(contaCorrenteJoao);
console.log(contaCorrenteJoao.cliente);