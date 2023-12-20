const {Transacao} = require('./main');
const {Conta} = require('./Conta');
const {Imposto} = require('./Imposto');
const ProcessadorTransacoes = require('./ProcessadorTransacoes');

const conta1 = new Conta("Conta de água", 100, "Corrente");
const imposto1 = new Imposto("Imposto de renda", 500, "Federal");

const processador = new ProcessadorTransacoes();

processador.processarTransacao(conta1);
processador.processarTransacao(imposto1);
