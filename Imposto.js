const {Transacao} = require("./main");

class Imposto extends Transacao{
    constructor(descricao, valor, tipoImposto){
        super(descricao, valor);
        this._tipoImposto = tipoImposto;
        
    };
    
    getTipoImposto(){
        return this._tipoImposto
    };

    setTipoImposto(tipoImposto){
        this._tipoImposto = tipoImposto
    }
}
exports.Imposto = Imposto