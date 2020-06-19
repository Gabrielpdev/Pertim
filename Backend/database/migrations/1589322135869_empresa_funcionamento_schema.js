'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaFuncionamentoSchema extends Schema {
  up () {
    this.create('empresa_funcionamentos', (table) => {
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
        .integer('funcionamento_dia_id')
        .unsigned()
        .references('id')
        .inTable('funcionamento_dias')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empresa_funcionamentos')
  }
}

module.exports = EmpresaFuncionamentoSchema
