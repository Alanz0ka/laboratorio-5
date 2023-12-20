const {Transacao} = require("./main");

class Despesas extends Transacao{
    constructor(descricao, valor, tipoDespesa){
        super(descricao, valor)

        this._tipoDespesa = tipoDespesa
    }

    getTipoDespesa(){
        return this._tipoDespesa
    }

    setTipoDespesa(tipoDespesa){
        this._tipoDespesa = tipoDespesa
    }  
}
exports.Despesas = Despesas