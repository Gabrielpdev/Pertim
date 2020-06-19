'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionamentoSchema extends Schema {
  up () {
    this.create('funcionamentos', (table) => {
      table.increments()
      table.time('inicio').notNullable()
      table.time('fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('funcionamentos')
  }
}

module.exports = FuncionamentoSchema
