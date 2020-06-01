'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entrega extends Model {
  dia () {
    return this.belongsToMany('App/Models/Dia').pivotModel('App/Models/EntregaDia')
  }
}

module.exports = Entrega
