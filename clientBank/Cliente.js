export class Cliente{
    nome;
    _cpf;

    get(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
};