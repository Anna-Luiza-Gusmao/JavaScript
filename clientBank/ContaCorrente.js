import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //faz referência a classe como um todo, e não só a instância de cada classe criada 
    agencia;
    _cliente;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //this se refere a classe que está sendo criada para determinado cliente
        //ContaCorrente se refere a classe como um todo, no caso para vários clientes 
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;                                              
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }
    
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        conta.cidade = "Montes Claros";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
};