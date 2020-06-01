'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntregaSchema extends Schema {
  up () {
    this.create('entregas', (table) => {
      table.increments()
      table.time('inicio').notNullable()
      table.time('fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('entregas')
  }
}

module.exports = EntregaSchema
