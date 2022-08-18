import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); //super chama o construtor pai que está dentro de Conta 
    }

    sacar(valor){
        let taxa = 1;
        return super._sacar(valor, taxa);
    }
}