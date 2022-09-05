const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa = require('../models/Pessoa');
const Cliente = require('../models/Cliente');
const Cartao = require('../models/Cartao');
const CartaoCliente = require('../models/CartaoCliente');
const Evento = require('../models/Evento');
const Produto = require('../models/Produto');
const Funcao = require('../models/Funcao');
const Funcionario = require('../models/Funcionario');
const Estoque = require('../models/Estoque');
const OrdemVenda = require('../models/OrdemVenda');
const Venda = require('../models/Venda');
const Recarga = require('../models/Recarga');
const Pagantes = require('../models/Pagantes');
const Compra = require('../models/Compra');
const ItemCompra = require('../models/ItemCompra');
const ItemVenda = require('../models/ItemVenda');
const Fornecedor = require('../models/Fornecedor');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Cliente.init(connection);
Cartao.init(connection);
CartaoCliente.init(connection);
Evento.init(connection);
Produto.init(connection);
Funcao.init(connection);
Funcionario.init(connection);
Estoque.init(connection);
OrdemVenda.init(connection);
Venda.init(connection);
Recarga.init(connection);
ItemCompra.init(connection);
ItemVenda.init(connection);
Compra.init(connection);
Fornecedor.init(connection);
Pagantes.init(connection);

Cliente.associate(connection.models);
Pessoa.associate(connection.models);
//Cartao.associate(connection.models);
CartaoCliente.associate(connection.models);
Funcao.associate(connection.models);
Funcionario.associate(connection.models);
Estoque.associate(connection.models);
OrdemVenda.associate(connection.models);
Venda.associate(connection.models);
ItemVenda.associate(connection.models);
Compra.associate(connection.models);
ItemCompra.associate(connection.models);
Recarga.associate(connection.models);
Pagantes.associate(connection.models);
//Fornecedor.associate(connection.models);

module.exports = connection;