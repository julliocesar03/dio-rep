class ContaBancaria {
    constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
    }

    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação Negada"
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'conta corrente';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'contapoupança';
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta universitária';
    }
    sacar(valor){
        if(valor > 500){
            return "Só é possível sacar valores menores do que 500 reais";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
        }
    }


