import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Anna";
cliente1.cpf = 12345678923;

const cliente2 = new Cliente();
cliente2.nome = "João Pedro";
cliente2.cpf = 128890323;

const contaCorrenteAnna = new ContaCorrente();
contaCorrenteAnna.agencia = 2098;
contaCorrenteAnna.cliente = cliente1;

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.agencia = 8769;
contaCorrenteJoao.cliente = cliente2;

contaCorrenteAnna.depositar(100);
contaCorrenteAnna.transferir(20, contaCorrenteJoao);

//console.log(cliente1);
//console.log("Saldo de Anna: ", contaCorrenteAnna._saldo);

console.log(contaCorrenteAnna);
console.log(contaCorrenteJoao);