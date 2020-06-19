'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EntregaDia extends Model {
  entrega () {
    return this.belongsTo('App/Models/Entrega')
  }

  dia () {
    return this.belongsTo('App/Models/Dia')
  }
}

module.exports = EntregaDia
