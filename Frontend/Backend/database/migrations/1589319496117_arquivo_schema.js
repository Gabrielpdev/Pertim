'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArquivoSchema extends Schema {
  up () {
    this.create('arquivos', (table) => {
      table.increments()
      table.string('path').notNullable()
      table.string('nome').notNullable()
      table.string('tipo', 20)
      table.string('subtipo', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('arquivos')
  }
}

module.exports = ArquivoSchema
