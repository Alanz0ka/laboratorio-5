const {Transacao} = require("./main");

class Pagamento extends Transacao{
    constructor(descricao, valor, tipoPagamento){
        super(descricao, valor);
        this._tipoPagamento = tipoPagamento;
    };
    
    getTipoPagamento(){
        return this._tipoPagamento
    };
    setTipoPagamento(tipoPagamento){
        this._tipoPagamento = tipoPagamento
    };
}
exports.Pagamento = Pagamento