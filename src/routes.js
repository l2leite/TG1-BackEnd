const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const ClienteController = require('./controllers/ClienteController');
const CartaoController = require('./controllers/CartaoController');
const CartaoClienteController = require('./controllers/CartaoClienteController');
const EventoController = require('./controllers/EventoController');
const ProdutoController = require('./controllers/ProdutoController');
const FuncaoController = require('./controllers/FuncaoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const EstoqueController = require('./controllers/EstoqueController');
const OrdemVendaController = require('./controllers/OrdemVendaController');
const VendaController = require('./controllers/VendaController');
const Fornecedor = require('./controllers/FornecedorController');
const FornecedorController = require('./controllers/FornecedorController');

const routes = express.Router();

routes.post('/pessoa', PessoaController.store);
routes.get('/pessoa', PessoaController.index);

routes.post('/pessoa/:pessoa_id/cliente', ClienteController.store);
routes.get('/pessoa/:pessoa_id/cliente', ClienteController.index);
routes.get('/pessoa/cliente', ClienteController.index_cpf);

routes.post('/cartao', CartaoController.store);
routes.get('/cartao', CartaoController.index);

routes.post('/cartaocliente', CartaoClienteController.store);
routes.get('/cartaocliente', CartaoClienteController.index);
routes.delete('/cartaocliente', CartaoClienteController.delete);
routes.patch('/cartaocliente', CartaoClienteController.update);

routes.get('/evento', EventoController.index);
routes.post('/evento', EventoController.store);
routes.patch('/evento', EventoController.update);

routes.get('/produto', ProdutoController.index);
routes.post('/produto', ProdutoController.store);
routes.patch('/produto', ProdutoController.update);

routes.get('/funcao', FuncaoController.index);
routes.post('/funcao', FuncaoController.store);
routes.patch('/funcao', FuncaoController.update);

routes.get('/funcionario', FuncionarioController.index);
routes.get('/funcionario/cpf', FuncionarioController.index_cpf);
routes.post('/funcionario', FuncionarioController.store);
//routes.patch('/funcionario', FuncionarioController.update);

routes.get('/estoque/:produto_id', EstoqueController.index);
//routes.get('/funcionario/cpf', FuncionarioController.index_cpf);
routes.post('/estoque', EstoqueController.store);
//routes.patch('/funcionario', FuncionarioController.update);

routes.get('/ordemvenda/index', OrdemVendaController.index);
routes.get('/ordemvenda/index_id', OrdemVendaController.index_id);
routes.get('/ordemvenda/index_par_id', OrdemVendaController.index_par_id);
routes.post('/ordemvenda/store', OrdemVendaController.store);
routes.patch('/ordemvenda/update', OrdemVendaController.update);
routes.delete('/ordemvenda/delete', OrdemVendaController.delete);

routes.post('/venda/store', VendaController.store);
routes.patch('/venda/update', VendaController.update);
routes.delete('/venda/delete', VendaController.delete);
routes.get('/venda/index', VendaController.index);
routes.get('/venda/index_id', VendaController.index_id);
routes.get('/venda/index_par_id', VendaController.index_par_id);

routes.post('/fornecedor/store', FornecedorController.store);
routes.get('/fornecedor/index', FornecedorController.index);
routes.get('/fornecedor/index_id', FornecedorController.index_id);
routes.get('/fornecedor/index_par_cnpj', FornecedorController.index_par_cnpj);
routes.patch('/fornecedor/update_cnpj', FornecedorController.update_cnpj);
routes.patch('/fornecedor/update_id', FornecedorController.update_id);
routes.delete('/fornecedor/delete', FornecedorController.delete);

module.exports = routes;