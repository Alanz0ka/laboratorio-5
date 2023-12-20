const {Transacao} = require("./main");

class Salario extends Transacao{
    constructor(descricao, valor, tipoSalario){
        super(descricao, valor)

        this._tipoSalario = tipoSalario
    }

    getTipoSalario(){
        return this._tipoSalario
    }

    setTipoSalario(tipoSalario){
        this._tipoSalario = tipoSalario
    }
}
exports.Salario = Salario