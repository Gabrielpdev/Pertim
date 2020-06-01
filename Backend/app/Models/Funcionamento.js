'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcionamento extends Model {
  dia () {
    return this.belongsToMany('App/Models/Dia').pivotModel('App/Models/FuncionamentoDia')
  }
}

module.exports = Funcionamento
