'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dia extends Model {
  funcionamento () {
    return this.belongsToMany('App/Models/Funcionamento').pivotModel('App/Models/FuncionamentoDia')
  }

  entrega () {
    return this.belongsToMany('App/Models/Entrega').pivotModel('App/Models/EntregaDia')
  }
}

module.exports = Dia
