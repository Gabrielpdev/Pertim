'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FuncionamentoDia extends Model {
  funcionamento () {
    return this.belongsTo('App/Models/Funcionamento')
  }

  dia () {
    return this.belongsTo('App/Models/Dia')
  }
}

module.exports = FuncionamentoDia
