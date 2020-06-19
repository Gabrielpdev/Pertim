'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.float('valor').notNullable()
      table.float('valor_promocional').notNullable()
      table.string('informacao').notNullable()
      table
        .integer('empresa_id')
        .unsigned()
        .references('id')
        .inTable('empresas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
