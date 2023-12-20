const {Transacao} = require("./main");
class Conta extends Transacao{
    constructor(descricao, valor, tipoConta){
        super(descricao, valor)
        this._tipoConta = tipoConta
    }

    getTipoConta(){
        return this._tipoConta
    }
    setTipoConta(tipoConta){
        this._tipoConta = tipoConta
    }
}

exports.Conta = Conta