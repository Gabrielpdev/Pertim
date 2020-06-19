'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empresa extends Model {
  arquivo () {
    return this.belongsTo('App/Models/Arquivo')
  }

  usuario () {
    return this.belongsTo('App/Models/Usuario')
  }

  produto () {
    return this.hasMany('App/Models/Produto')
  }

  endereco () {
    return this.belongsToMany('App/Models/Endereco').pivotModel('App/Models/EnderecoEmpresa')
  }

  funcionamento () {
    return this.belongsToMany('App/Models/FuncionamentoDia').pivotModel('App/Models/EmpresaFuncionamento')
  }

  entrega () {
    return this.belongsToMany('App/Models/EntregaDia').pivotModel('App/Models/EmpresaEntrega')
  }

  pagamento () {
    return this.belongsToMany('App/Models/TipoPagamento').pivotModel('App/Models/EmpresaPagamento')
  }
}

module.exports = Empresa
