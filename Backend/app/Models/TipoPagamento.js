'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoPagamento extends Model {
  empresa () {
    return this.belongsToMany('App/Models/Empresa').pivotModel('App/Models/EmpresaPagamento')
  }
}

module.exports = TipoPagamento
