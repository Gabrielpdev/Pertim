'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaEntregaSchema extends Schema {
  up () {
    this.create('empresa_entregas', (table) => {
      table.increments()
      table
        .integer('empresa_id')
        .unsigned()
        .references('id')
        .inTable('empresas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('entrega_dia_id')
        .unsigned()
        .references('id')
        .inTable('entrega_dias')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empresa_entregas')
  }
}

module.exports = EmpresaEntregaSchema
