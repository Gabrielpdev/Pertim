'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
const Route = use('Route')

// -------------------  USUARIOS  -----------------------------

Route.post('/usuarios', 'UsuarioController.store').validator('Usuario')
Route.put('/usuarios/:id', 'UsuarioController.update')

// -------------------  SEÇÃO  -----------------------------

Route.post('/secao', 'SecaoController.store')

// -------------------  DISTANCIA  -----------------------------

Route.get('/distancias', 'DistanciaController.index').validator('Distancia')

// -------------------  ARQUIVOS  -----------------------------

Route.get('/arquivos/:id', 'ArquivoController.show')

// -------------------  ENDEREÇOS  -----------------------------

Route.get('/enderecos/:id', 'EnderecoController.show')

// -------------------  EMPRESA  -----------------------------

Route.get('/empresas', 'EmpresaController.index')
Route.get('/empresas/:id', 'EmpresaController.show')

Route.get('/empresa-proprietario/:id', 'EmpresaProprietarioController.show')

// -------------------  PRODUTOS  -----------------------------

Route.get('/produtos', 'ProdutoController.index')
Route.get('/produtos/:id', 'ProdutoController.show')

// -------------------  TIPOS PAGAMENTOS  -----------------------------

Route.get('/tipo-pagamentos', 'TipoPagamentoController.index')
Route.get('/tipo-pagamentos/:id', 'TipoPagamentoController.show')

// -------------------  FUNCIONAMENTO  -----------------------------

Route.get('/funcionamentos', 'FuncionamentoController.index')
Route.get('/funcionamentos/:id', 'FuncionamentoController.show')

// -------------------  FUNCIONAMENTO DIA -----------------------------

Route.get('/funcionamento-dia', 'FuncionamentoDiaController.index')
Route.get('/funcionamento-dia/:id', 'FuncionamentoDiaController.show')

// -------------------  ENTREGAS  -----------------------------

Route.get('/entregas', 'EntregaController.index')
Route.get('/entregas/:id', 'EntregaController.show')

// -------------------  FUNCIONAMENTO DIA -----------------------------

Route.get('/entrega-dia', 'EntregaDiaController.index')
Route.get('/entrega-dia/:id', 'EntregaDiaController.show')

// -------------------  DIAS  -----------------------------

Route.get('/dias', 'DiaController.index')
Route.get('/dias/:id', 'DiaController.show')

/*
|--------------------------------------------------------------------------
| ALTENTICAÇÕES
|--------------------------------------------------------------------------
*/

// -------------------  ARQUIVOS  -----------------------------

Route.post('/arquivos', 'ArquivoController.store').middleware(['auth'])

// -------------------  ENDEREÇOS  -----------------------------

Route.get('/enderecos', 'EnderecoController.index').middleware(['auth'])
Route.post('/enderecos', 'EnderecoController.store').validator('Endereco').middleware(['auth'])
Route.put('/enderecos/:id', 'EnderecoController.update').middleware(['auth'])
Route.delete('/enderecos/:id', 'EnderecoController.destroy').middleware(['auth'])

// -------------------  USUARIOS  -----------------------------

Route.get('/usuarios', 'UsuarioController.index').middleware(['auth'])
Route.get('/usuarios/:id', 'UsuarioController.show').middleware(['auth'])
Route.delete('/usuarios/:id', 'UsuarioController.destroy').middleware(['auth'])

// -------------------  DIAS  -----------------------------

Route.post('/dias', 'DiaController.store')
  .validator('Dia')
  .middleware(['auth'])

Route.put('/dias/:id', 'DiaController.update')
  .middleware(['auth'])

Route.delete('/dias/:id', 'DiaController.destroy')
  .middleware(['auth'])

// -------------------  ENTREGAS  -----------------------------

Route.post('/entregas', 'EntregaController.store')
  .validator('Entrega')
  .middleware(['auth'])

Route.put('/entregas/:id', 'EntregaController.update')
  .middleware(['auth'])

Route.delete('/entregas/:id', 'EntregaController.destroy')
  .middleware(['auth'])

// -------------------  ENTREGAS DIA -----------------------------

Route.post('/entrega-dia', 'EntregaDiaController.store')
  .validator('EntregaDia')
  .middleware(['auth'])

Route.put('/entrega-dia/:id', 'EntregaDiaController.update')
  .middleware(['auth'])

Route.delete('/entrega-dia/:id', 'EntregaDiaController.destroy')
  .middleware(['auth'])

// -------------------  FUNCIONAMENTOS  -----------------------------

Route.post('/funcionamentos', 'FuncionamentoController.store')
  .validator('Funcionamento')
  .middleware(['auth'])

Route.put('/funcionamentos/:id', 'FuncionamentoController.update')
  .middleware(['auth'])

Route.delete('/funcionamentos/:id', 'FuncionamentoController.destroy')
  .middleware(['auth'])

// -------------------  FUNCIONAMENTO DIA -----------------------------
Route.post('/funcionamento-dia', 'FuncionamentoDiaController.store')
  .validator('FuncionamentoDia')
  .middleware(['auth'])

Route.put('/funcionamento-dia/:id', 'FuncionamentoDiaController.update')
  .middleware(['auth'])

Route.delete('/funcionamento-dia/:id', 'FuncionamentoDiaController.destroy')
  .middleware(['auth'])

// -------------------  TIPOS PAGAMENTOS  -----------------------------

Route.post('/tipo-pagamentos', 'TipoPagamentoController.store')
  .validator('TipoPagamento')
  .middleware(['auth'])

Route.put('/tipo-pagamentos/:id', 'TipoPagamentoController.update')
  .middleware(['auth'])

Route.delete('/tipo-pagamentos/:id', 'TipoPagamentoController.destroy')
  .middleware(['auth'])

// ------------------------  PRODUTOS  -----------------------------

Route.post('/produtos', 'ProdutoController.store')
  .validator('Produto')
  .middleware(['auth'])

Route.put('/produtos/:id', 'ProdutoController.update')
  .middleware(['auth'])

Route.delete('/produtos/:id', 'ProdutoController.destroy')
  .middleware(['auth'])

// ------------------------  EMPRESAS  -----------------------------

Route.post('/empresas', 'EmpresaController.store')
  .validator('Empresa')
  .middleware(['auth'])

Route.put('/empresas/:id', 'EmpresaController.update')
  .middleware(['auth'])

Route.delete('/empresas/:id', 'EmpresaController.destroy')
  .middleware(['auth'])
