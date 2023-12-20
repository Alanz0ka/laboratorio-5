class ProcessadorTransacoes {
    processarTransacao(transacao) {
      console.log("Processando uma transação:", transacao.getDescricao());
    }
}
  
  module.exports = ProcessadorTransacoes;
